// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database();
const conversationTable = db.collection('uni-im-conversation')
const msgTable = db.collection('uni-im-msg')
const usersTable = db.collection('uni-id-users')
const uniIdCommon = require('uni-id-common')
const dbCmd = db.command
const $ = dbCmd.aggregate
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const createConfig = require("uni-config-center");
const uniImConfig = createConfig({
	pluginId: 'uni-im', // 插件id
})
module.exports = {
	_before() {
		this.clientInfo = this.getClientInfo()
		this.uniIdCommon = uniIdCommon.createInstance({ // 创建uni-id实例，其上方法同uniIdCommon
			clientInfo: this.clientInfo
		})
	},
	async getConversationList({
		limit = 500,
		page = 0,
		conversation_id = false
	}) {
		let res = await this.uniIdCommon.checkToken(this.clientInfo.uniIdToken)
		if (res.errCode) {
			return res
		}
		res = await conversationTable.aggregate()
			.sort({
				update_time: -1
			})
			.match({
				"owner_uid": res.uid,
				"group_id": dbCmd.exists(false),
				"id":conversation_id||dbCmd.neq(null)
			})
			.skip(page * limit)
			.limit(limit)
			.lookup({
				from: "uni-id-users",
				let: {
					user_id: '$user_id'
				},
				pipeline: $.pipeline()
					.match(
						dbCmd.expr($.eq(['$_id', '$$user_id']))
					).project({
						_id: 1,
						nickname: 1,
						avatar_file: 1,
						mobile: 1,
						email: 1
					})
					.done(),
				as: 'user_info'
			})
			.lookup({
				from: "uni-im-msg",
				let: {
					user_id: '$user_id'
				},
				pipeline: $.pipeline()
					.match(
						dbCmd.expr($.or(
							$.eq(['$$user_id', '$from_uid']),
							$.eq(['$$user_id', '$to_uid'])
						))
					)
					.sort({
						create_time: 1
					})
					.limit(1)
					.project({
						_id: 1,
						nickname: 1,
						avatar_file: 1,
						mobile: 1,
						email: 1
					})
					.done(),
				as: 'msgList'
			})
			.end()
		return {
			data: res.data,
			errCode: 0
		}
	},
	async sendMsg(params, context) {
		const {
			to_uid,
			// group_id,
			body,
			type,
			isRetries
		} = params

		//校验是否登录
		let res = await this.uniIdCommon.checkToken(this.clientInfo.uniIdToken)
		if (res.errCode) {
			return res
		}

		let last_msg_note = '[多媒体]'
		if (type == 'text') {
			last_msg_note = body.toString()
			last_msg_note = last_msg_note.replace(/[\r\n]/g, "");
			last_msg_note = last_msg_note.slice(0, 30)
		}
		
		let typeObj = {
			"image":"[图片]",
			"sound":"语音",
			"video":"[视频]",
			"file":"文件",
			"location":"位置"
		}
		last_msg_note = typeObj[type]
		
		//发送者身份id
		const from_uid = res.uid
		let admin_uid =  uniImConfig.config('admin_uid')
		if(admin_uid){
			if(typeof admin_uid == 'string'){
				admin_uid = [admin_uid]
			}
			if(
				!(admin_uid.includes(from_uid) || admin_uid.includes(to_uid))
			){
				return {
					errMsg: '非法通讯，会话双方用户id，均不属于uni-im-co中配置的admin_uid',
					errSubject: "uni-im",
					errCode: 40001
				}
			}
		}
		
		
		const conversation_id = getConversationId([from_uid, to_uid])
		const msgData = {
			body,
			type,
			from_uid,
			to_uid,
			//默认已读为false
			is_read: false,
			//创建时间
			create_time: Date.now(),
			conversation_id
		}

		//会话表
		let {
			data: [conversation]
		} = await conversationTable.where({
			id: conversation_id
		}).get()
		if (conversation) {
			//对方的会话表更新，并且未读数+1
			let res = await conversationTable.where({
				id: conversation_id,
				owner_uid: to_uid
			}).update({
				unread_count: dbCmd.inc(1),
				last_msg_note,
				update_time: msgData.create_time
			})
			console.log(res);

			//自己的会话表更新。仅更新最后一条消息的时间和内容
			res = await conversationTable.where({
				id: conversation_id,
				owner_uid: from_uid
			}).update({
				// unread_count: dbCmd.inc(1),
				last_msg_note,
				update_time: msgData.create_time
			})
			console.log(res);
		} else {
			// 消息接收者 会话数据
			let data1 = {
				id: conversation_id,
				type: msgData.group_id ? 2 : 1,
				owner_uid: msgData.to_uid,
				user_id: msgData.from_uid,
				group_id: msgData.group_id,
				unread_count: 1,
				last_msg_note,
				update_time: msgData.create_time
			}
			// 消息发送者 会话数据
			let data2 = {
				...data1,
				unread_count: 0,
				owner_uid: msgData.from_uid,
				user_id: msgData.to_uid
			}
			// console.log(123231123,data,[data1,data2]);
			let res = await conversationTable.add([data1, data2])
			// console.log(res);
		}
		console.log({
			...msgData,
			conversation_id
		});
		let msg_id = false;
		if(!isRetries){
			res = await msgTable.add({
				...msgData,
				conversation_id
			})
			if(msgData.body.length > 250){
				msgData.body = msgData.body.slice(0,50)
				msg_id = res.id
			}
			console.log('msgTable msgData:', res);
		}
		res = await db.collection('uni-id-users').doc(from_uid)
		.field({
			'username': true ,
			'_id': true ,
			'nickname': true,
			'avatar_file': true 
		}).get()
		let {username,nickname,avatar_file} = res.data[0]
		let title = (username||nickname).slice(0,20)
		let content = msgData.type == 'text' ? msgData.body : '[多媒体]'
		console.log(content);
		let param = {  
			"user_id": msgData.to_uid,
			"payload": {
				"type": "im",
				"data":msgData,
				title,// "收到im消息，在线时显示的标题",
				content,// "在线时显示的副标题",
				avatar_file,//头像文件对象
				msg_id
			},
			title:title.slice(0,20),// "收到im消息，离线时显示的标题",
			content:content.slice(0,50),//"离线时显示的内容"
			settings:{
				//-1表示不设离线，因为离线后重新打开数据统一从数据库中拉取。否则会重复
				ttl:-1
			},
			channel:{
				"HW":"NORMAL"
			}
		}
		console.log({param});
		if (msgData.to_uid) {
			//单聊
			param.user_id = msgData.to_uid
		} else if (msgData.group_id) {
			return {
				errCode: 1000,
				errMsg: '群聊功能正在开发中',
				errSubject: "uni-im"
			}
			console.log('param====', param);
		} else {
			return {
				errCode: 404,
				errMsg: '接受者id不能为空',
				errSubject: "uni-im"
			}
		}
		
		let uniPush = uniCloud.getPushManager({appId:params.appId})
		res = await uniPush.sendMessage(param)
		if (res.errCode) {
			if(res.errCode == "uni-push-user-invalid"){
				//可能因为用户长时间没有登录导致的cid过期而发送失败，但是此时已将离线数据写入数据库，登录后可获取。客户端不需要进入 catch
				res = {
					cause:res,
					errCode:0
				}
			}else{
				return res
			}
		}
		console.log('sendMessage',JSON.stringify(res))
		/*
		//判断是否已经有客户端接收到消息，注意：收到不等于已读
		console.log('sendMessage res', res);
		let taskData = res.data[Object.keys(res.data)]
		let state = false;
		for (let key in taskData) {
			if (taskData[key] == 'successed_online') {
				state = true
				break
			}
		}
		console.log('state : ============> ' + state);*/
		if(!res.data){
			res.data = {}
		}
		res.data.create_time = msgData.create_time		return res
	},
	async loginWithJWT(sign){
		let jwtSecret = uniImConfig.config('jwtSecret')
		if(!jwtSecret){
			return {
				errCode: 4000,
				errMsg: 'jwtSecret的值不能为空'
			}
		}
		if(jwtSecret == 'jwtSecretDemo'){
			console.error('[warn]: 不要使用默认的：jwtSecret的值');
			return {
				errCode: 4100,
				errMsg: '不要使用默认的：jwtSecret的值'
			}
		}
		let userInfo;
		try{
			let decoded = jwt.verify(sign, jwtSecret);
			if(decoded.exp && decoded.exp < Date.now()){
				throw '签名数据过期'
			}
			userInfo = decoded.userInfo
			if(!userInfo.openid){
				return {
					errCode: 2,
					errMsg: 'userInfo.openid不能为空',
					errSubject: "uni-im"
				}
			}
		}catch(e){
			console.error(e);
			return {
				errCode: 1,
				errMsg: '签名验证失败',
				errSubject: "uni-im"
			}
		}
		console.log(userInfo);
		let {openid} = userInfo
		let res = await usersTable.where({openid}).get()
		console.log(res);
		if(res.data.length){
			res = await usersTable.where({openid}).updateAndReturn(userInfo)
		}else{
			res = await usersTable.add(userInfo)
		}
		console.log(res);
		let newToken = await this.uniIdCommon.createToken({
		  uid: res.id || res.doc._id
		})
		return {
			errCode: 0,
			newToken
		}
	}
}

function getConversationId(param) {
	return 'single' + '_' + md5(param.sort().toString())
}

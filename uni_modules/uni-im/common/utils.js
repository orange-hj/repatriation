// #ifdef VUE3
import {onShow} from '@dcloudio/uni-app'
import {onHide} from '@dcloudio/uni-app'
// #endif

import $store from '@/store/index.js'
import formatTime from '@/uni_modules/uni-im/common/formatTime';

let appIsShow = true;
export default {
	init(){
		setTimeout(()=>{
			// 初始化uniIm依赖的全局变量
			getApp().globalData.uniIm = {
				"msgManagers":{},
				audioContext:uni.createInnerAudioContext()
			}
		},0)
		
		//监听im消息
		this.listenImMsg()
		//时间戳心跳（定时器）用于刷新：消息或会话与当前的时间差
		setInterval(()=>{
			$store.commit('uniIm/updateHeartbeat')
		},1000)
		
		// #ifdef APP
			//提示兼容性问题
			showTip()
			const appOnShow = ()=>{
				appIsShow = true
				//清理系统通知栏消息和app角标
				this.clearPushNotify()
			}
			function appOnHide(){
				appIsShow = false
			}
			// #ifdef VUE2
			getApp().$vm.$on('hook:onShow',appOnShow)
			getApp().$vm.$on('hook:onHide',appOnHide)
			// #endif
			
			// #ifdef VUE3
			onShow(appOnShow,getApp().$vm.$)
			onHide(appOnHide,getApp().$vm.$)
			// #endif
		// #endif
	},
	getConversationId(param, type = 'single') { //single,group
		if (type == 'single') {
			let current_uid = uniCloud.getCurrentUserInfo().uid
			if (!current_uid) {
				console.error('错误current_uid不能为空', current_uid);
			}
			param = [param, current_uid]
			return 'single_' + md5(param.sort().toString())
		} else {
			throw ('群聊功能暂未开发完成')
		}
	},
	listenImMsg(){
		uni.onPushMessage(async res => {
			const {currentConversationId} = $store.state.uniIm
			console.log('收到消息 onPushMessage===================',res.type, res.data,currentConversationId );
			const {payload} = res.data
			if (payload.type == 'im') {
				const msg = payload.data
				// console.log({msg});
				
				const {msg_id} = payload
				if(msg_id){
					const db = uniCloud.database();
					let res = await db.collection('uni-im-msg').doc(msg_id).get()
					console.error(res);
					if(res.result.code == 0){
						payload.data.body = res.result.data[0].body
					}
				}
				
				
				if(res.type =='receive'){
					// console.log(777);
					const {conversation_id} = msg
					// console.log('msgmsgmsgmsgmsg.msg',msg);
					// #ifdef APP
					let currentPages = getCurrentPages()
					let topViewRoute = currentPages[currentPages.length-1].route
					console.log('topViewRoute',topViewRoute);
					if( !appIsShow || !['uni_modules/uni-im/pages/index/index','uni_modules/uni-im/pages/chat/chat'].includes(topViewRoute) ){
						console.log('payload',payload);
						let {content,data,title,avatar_file} = payload
						let url = avatar_file?avatar_file.url: ''
						let icon = '_www/uni_modules/uni-im/static/avatarUrl.png'
						//安卓才有头像功能，再执行下载
						if (uni.getSystemInfoSync().platform == "android") {
							if(avatar_file){
								let downloadFileRes = await uni.downloadFile({url:avatar_file.url});
								icon = downloadFileRes[1]?.tempFilePath
							}
						}
						plus.push.createMessage(content,payload,{title,icon})
					}else if(conversation_id != currentConversationId){
						// uni.showToast({
						// 	title: '收到新消息请注意查看',
						// 	icon: 'none'
						// });
					}
					// #endif
					$store.dispatch('uniIm/setMsgList',{
						conversation_id,
						action:'unshift',
						data:msg
					})
				}else{
					console.log(666);
					uni.navigateTo({
						url: '/uni_modules/uni-im/pages/chat/chat?conversation_id=' + msg.conversation_id,
						complete(e) {
							console.log(e);
						}
					})
				}
			}
		})
	},
	formatTime(timestamp){
		timestamp +
			// 加上一个*0的数,用于刷新视图中的时间 （超过5小时的直接显示具体年月日）
			(timestamp - Date.now() < 3600 * 5 * 1000 ? $store.state.uniIm.heartbeat * 0 : 0);
		if (!timestamp) {
			return '';
		}
		return formatTime(timestamp)
	},
	clearPushNotify(){
		// #ifdef APP
		plus.push.clear()
		plus.runtime.setBadgeNumber(0)
		// #endif
	}
}

function showTip(){
	// #ifdef APP
	let {uniCompileVersion} = uni.getSystemInfoSync()
	let version = uniCompileVersion.split('.').reduce((prev,cur,index,arr)=>prev+cur*Math.pow(1000,arr.length-index),0)
	// console.log('version',version);
	if(
		version < 3006009000
	){
		uni.showModal({
			content: 'APP端uni-im需要HBuilderX 3.6.9以上版本，否则chat页面会存在滚动锚定问题',
			showCancel: false
		});
	}
	// #endif
}
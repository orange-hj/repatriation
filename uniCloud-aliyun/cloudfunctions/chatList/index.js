'use strict';
	
const uniID = require('uni-id');

const db = uniCloud.database()
const sys_user = db.collection('sys_user')
const goods = db.collection('goods')
const chat = db.collection('chat')
exports.main = async (event, context) => {
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	dbJQL.setUser({
		uid: 'user-id',
		role: ['admin'],
		permission: []
	})
	//判断是否有token
	if(!event.headers.token){
		return {
			code:1001,
			message:'未登录',
			data:null
		}
	}
	//token失效
	const senderId = await uniID.getUserInfoByToken(event.headers.token)
	if(senderId.code != 0){
		return {
			code:401,
			message:'请重新登录',
			data:null
		}
	}
	//获取自己相关的聊天记录
	let chatListResult = await chat.where({senderId:senderId.uid}).get()
	if(chatListResult.affectedDocs == 0){
		return {
			code:200,
			message:'聊天列表为空',
			data:[]   //event.queryStringParameters   { }
		}
	}
	//筛选列表数据
	
	let order = await dbJQL.collection('chat').where({senderId:senderId.uid}).getTemp()
	const result = await dbJQL.collection(order,'sys_user').get()
	return{
		code:200,
		message:'11111',
		data:result
	}
};

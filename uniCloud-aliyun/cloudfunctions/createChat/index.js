'use strict';
const uniID = require('uni-id');

const db = uniCloud.database()
const sys_user = db.collection('sys_user')
const goods = db.collection('goods')
const chat = db.collection('chat')
exports.main = async (event, context) => {
	
	//判断是否有token
	if(!event.headers.token){
		return {
			code:1001,
			message:'未登录',
			data:null
		}
	}
	const senderId = await uniID.getUserInfoByToken(event.headers.token)
	if(senderId.code != 0){
		return {
			code:401,
			message:'请重新登录',
			data:null
		}
	}
	
	if(!event.queryStringParameters.goodsId){
		return {
			code:404,
			message:'参数丢失',
			data:event.queryStringParameters
		}
	}else{
		let goodResult = await goods.doc(event.queryStringParameters.goodsId).get()
		if(goodResult.affectedDocs == 0){
			return {
				code:200,
				message:'商品列表为空',
				data:event   //event.queryStringParameters   { }
			}
		}else{
			let receiveId = goodResult.data[0].uid
			let createTime = new Date()
			await chat.add({
				senderId:senderId.uid,
				receiveId,
				createTime,
			})
			return {
				code:200,
				data:true,
				mas:"创建聊天成功"
			}
		}
	}
};

'use strict';

const uniID = require('uni-id')

const db = uniCloud.database()
const collection = db.collection('sys_user')

exports.main = async (event, context) => {
	if(!event.headers.token){
		return {
			code:1001,
			message:'未登录',
			data:null
		}
	}
	const res = await uniID.getUserInfoByToken(event.headers.token)
	if(!res.uid){
		return {
			code:200,
			message:'未查询到uid',
			data:null
		}
	}
	let userInfo = await collection.where({uid:res.uid}).get()
	if(userInfo.affectedDocs == 1){
		return {
			code:200,
			message:'success',
			data:userInfo.data[0]
		}
	}else{
		return {
			code:1005, //重复数据
			message:'fail',
			data:null
		}
	}
	
	
	
	
	// let header = event.headers
	
	// let token = event.headers.token
	
	// let id = token.split('.')[1]
	
	// var str = decodeURIComponent(id);//解码
	
	// let re = JSON.parse(str)
	
	// let a = decodeURI(token[1])
	
	
	
	// console.log('str', str);
	
	
	// const db = uniCloud.database()
	// const collection = db.collection('cc_user')
	// const phone = await collection.where({
	// 	phone:event.phone
	// }).get()
	// console.log(phone);
	// return {
	// 	// re:re,
	// 	str:str,
	// 	id:id,
	// 	token:token,
	// 	header:header
	// }
};

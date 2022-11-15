'use strict';
const uniID = require('uni-id');

const db = uniCloud.database()
const sys_user = db.collection('sys_user')
const goods = db.collection('goods')
exports.main = async (event, context) => {
	
	console.log(event,'event');
	
	//判断是否有token
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
	}else{
		let addUID = await goods.add({
			uid:res.uid,
		})
		for(let i in event){
			goods.where({_id:addUID.id}).set({
				i:event[i]
			})
		}
		return {
			data:true,
			mas:123
		}
	}
	
	
	return {
		data:res,
		mes:'false'
	}
	
	// return {
	// 	code:200,
	// 	data:'true'
	// }
};

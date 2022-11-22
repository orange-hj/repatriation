'use strict';
const uniID = require('uni-id');

const db = uniCloud.database()
const sys_user = db.collection('sys_user')
const goods = db.collection('goods')
exports.main = async (event, context) => {
	
	let r_goods = await goods.doc(event.queryStringParameters.id).get()
	
	let r_user = await sys_user.where({uid:r_goods.data[0].uid}).get()
	//event.queryStringParameters
	if(r_goods.affectedDocs == 0){
		return {
			code:404,
			message:"未找到商品",
			data:null
		}
	}
	return {
		code:200,
		message:'请求成功',
		data:{
			goodsInfo:r_goods.data[0],
			userInfo:r_user.data[0]
		}
	}
};

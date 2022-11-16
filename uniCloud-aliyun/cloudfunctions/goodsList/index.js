'use strict';
const uniID = require('uni-id');

const db = uniCloud.database()
const sys_user = db.collection('sys_user')
const goods = db.collection('goods')
exports.main = async (event, context) => {
	

	let goodsList = await goods.get()
	
	if(goodsList.affectedDocs == 0){
		return {
			code:200,
			message:'商品列表为空',
			data:event   //event.queryStringParameters   { }
		}
	}else{
		return {
			code:200,
			message:'',
			data:[goodsList.data[0]]
		}
	}
};

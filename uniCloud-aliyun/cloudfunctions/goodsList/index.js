'use strict';
const { rejects } = require('assert');
const { resolve } = require('dns');
const uniID = require('uni-id');

const db = uniCloud.database()
const sys_user = db.collection('sys_user')
const goods = db.collection('goods')
exports.main = async (event, context) => {

	//获取商品列表数据
	let goodsList = await goods.get()
	if(goodsList.affectedDocs == 0){
		return {
			code:200,
			message:'商品列表为空',
			data:event   //event.queryStringParameters   { }
		}
	}else{
		let r_user
		let array = []
		console.log(goodsList.data);
		return addData(goodsList.data).then(res =>{
			console.log(res);
			return {
				code:200,
				message:'',
				data:res
			}
		},err =>{
			console.log(err);
			return {
				code:404,
				message:'出错了',
				data:err
			}
		})
	}
};

function addData(data){
	return new Promise(async(resolve,rejects) =>{
		console.log(data.length);
		let r_user
		let array = []
		
		for(let i = 0; i<=data.length;i++){
			if(i == data.length){
				resolve(array)
				return
			}
			r_user = await sys_user.where({uid:data[i].uid}).get()
			
			let { intro,price,list,_id } = data[i]
			let { avatar,nickName } = r_user.data[0]
			array.push({
				intro,price,avatar,nickName,
				goodsImage:list[0].url,
				id:_id
			})
		}
	})
}

'use strict';
const uniID = require('uni-id');

const db = uniCloud.database()
const collection = db.collection('sys_user')

exports.main = async (event, context) => {
	//获取token
	let res = await uniID.loginByWeixin({code:event.code})
	//查询是否首次登录
	let userList = await collection.where({uid:res.uid}).get()
	
	if(!userList.affectedDocs){
		//首次登录存储数据
		collection.add({uid:res.uid})
		return {
			code:200,
			token:res.token,
		}
	}else{
		//用户id
		let id = userList.data[0]._id
		if(!userList.data[0].nickName){
			collection.where({_id:id}).update({nickName:'随机名字'})
		}
		if(!userList.data[0].avatar){
			collection.where({_id:id}).update({avatar:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F5476e32631957.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670398735&t=cb7235b753ba013b9c3eaeb0d5b37dc1'})
		}
		return {
			code:200,
			token:res.token,
			userInfo:{
				nickName:'随机名字',
				avatar:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F5476e32631957.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670398735&t=cb7235b753ba013b9c3eaeb0d5b37dc1'
			}
		}
	}
};
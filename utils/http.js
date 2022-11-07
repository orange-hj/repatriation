
import config from "@/config.js"
import Vue from 'vue'

const http = ({url, data = {}, method = 'GET', showLoading = false, wait = 1000}) => {
	//设置请求参数
	let newUrl = config.BaseUrl + url
	let token = uni.getStorageSync('token');
	let header = {
		// 'content-type': 'application/x-www-form-urlencoded', // 默认值
		// 自定义请求头
		// 'access-token': app.globalData.access_token, // 访问令牌
		// 'user-token': app.globalData.user_token, // 登录令牌
		// 'version': 'v1.0' // 版本号
		Authorization: `Bearer ${token}`
	}
	
	//白名单判断遍历
	config.WhiteList.forEach(item => {
		if(url.indexOf(item) > -1){
			return header = {}
		}
	})
	
	//请求
	if(showLoading){
		uni.showLoading({
			title:'加载中'
		})
	}
	return new Promise(function(resolve,reject){
		uni.request({
			url:newUrl,
			method:method,
			data:data,
			header:header,
			success:function(res){
				if(res.data.code == 401 || res.data.code == 1009){
					
				}
				resolve(res)
			},
			fail:function(err){
				reject(err)
			},
			complete:function(){
				if(showLoading){
					setTimeout(() =>{
						uni.hideLoading();
					}, wait)
				}
			}
		})
	})
};

module.exports = http;

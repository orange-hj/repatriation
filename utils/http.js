
import config from "@/config.js"
import Vue from 'vue'

const http = ({url, data = {}, method = 'GET', showLoading = false, wait = 1000}) => {
	//设置请求参数
	let newUrl = config.BaseUrl + url
	let token = uni.getStorageSync('token');
	let header = {
		token:token
	}
	
	//白名单判断遍历
	// config.WhiteList.forEach(item => {
	// 	if(url.indexOf(item) > -1){
	// 		return header = {}
	// 	}
	// })
	
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
				if(res.data.code == 401 || res.data.code == 1001){
					
				}
				resolve(res.data)
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


import config from "@/config.js"
import Vue from 'vue'

const http = ({url, data = {}, method = 'GET', showLoading = false, wait = 0}) => {
	
	//获取当前页面路由
	let routes = getCurrentPages(); 
	let curRoute = routes[routes.length - 1].route
	if(Vue.prototype.$globalData.currentRoute != curRoute){
		Vue.prototype.$globalData.isTips = false;
		Vue.prototype.$globalData.currentRoute = curRoute;
		console.log('修改当前路由');
	}
	
	//设置请求参数
	let newUrl = config.BaseUrl + url
	let token = uni.getStorageSync('token');
	let header = {
		
	}
	
	//白名单判断遍历
	config.WhiteList.forEach(item => {
		if(url.indexOf(item) > -1){
			return header = {
				inviteCode:uni.getStorageSync('inviteCode') || '',
				openId:uni.getStorageSync('openid')
			}
		}
	})
	
	//请求
	if (showLoading) {
	    uni.showLoading({
			title: '加载中'
		});
	}
	return new Promise(function(resolve,reject){
		uni.request({
			url:newUrl,
			method:method,
			data:data,
			header:header,
			success:function(res){
				if(res.data.code == 401 || res.data.code == 1009){
					console.log('Vue.prototype.$globalData.isTips',Vue.prototype.$globalData.isTips);
					// if(!Vue.prototype.$globalData.isTips){
					// 	Vue.prototype.$globalData.isTips = true
					// 	interaction.confirm('提示', '您未登录，请前往登录', {
					// 		confirmText: '前往登录'
					// 	})
					// 	.then((res) => {
					// 		if (res) {
					// 			uni.redirectTo({
					// 				url: '/pages/authentication/login'
					// 			});
					// 		}else{
					// 			return 
					// 		}
					// 	});
					// }
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


import config from "@/config.js"
import Vue from 'vue'

const http = ({url, data = {}, method = 'GET', showLoading = false, wait = 0}) => {
	return new Promise(function(resolve,reject){
		uni.request({
			url:url,
			method:method,
			data:data,
			header:{},
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

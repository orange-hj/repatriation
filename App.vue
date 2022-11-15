<script>
import Vue from 'vue'
export default {
	onLaunch: function() {
		console.log('App Launch')
		//小程序获取屏幕高度
		uni.getSystemInfo({
			success: function(e) {
				// #ifndef MP
				Vue.prototype.$StatusBar = e.statusBarHeight;
				if (e.platform == 'android') {
					Vue.prototype.$CustomBar = e.statusBarHeight + 50;
				} else {
					Vue.prototype.$CustomBar = e.statusBarHeight + 45;
				};
				// #endif
		
				// #ifdef MP-WEIXIN
				Vue.prototype.$StatusBar = e.statusBarHeight;
				let custom = wx.getMenuButtonBoundingClientRect();
				Vue.prototype.$Custom = custom;
				Vue.prototype.$CustomBar = custom.bottom + custom.top - e.statusBarHeight + 4;
				// #endif		
		
				// #ifdef MP-ALIPAY
				Vue.prototype.$StatusBar = e.statusBarHeight;
				Vue.prototype.$CustomBar = e.statusBarHeight + e.titleBarHeight;
				// #endif
			}
		});
		//公用方法
		Vue.prototype.$globalData = {
			//是否为空判断
			isEmpty: function (value) {
				if (value == true) {
					return false;
				}
				if (!value) {
					//value: undefined, null, 0, false, ""
					return true;
				}
				if (Array.isArray(value)) {
					return value.length == 0;
				}
				if (typeof value == 'object') {
					//TODO value__class == Object or child Window Object
					for (var p in value) {
						//is Object
						return false;
					}
					return true;
				}
				return false;
			},
			//提示弹窗
			toast({title,type,wait = 1000}){
				return new Promise((resolve,reject) =>{
					uni.showToast({
						title: title,
						icon: type || 'none',
						duration:wait
					}).then(res =>{
						setTimeout(function(){
							resolve(res)
						},wait)
					})
				})
			},
			//复制
			copy(value){
				uni.setClipboardData({
					data: value,
					success: function () {
						console.log('success');
					},
				})
			}
		}
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style>
	/*每个页面公共css */
	@import "@/static/font/iconfont.css";
	@import "@/static/style/common.css";
	page{
		font-family:"微软雅黑";
		height: 100%;
	}
	
	
</style>

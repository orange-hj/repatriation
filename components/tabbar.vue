<template>
	<view class="tabbar">
		<view class="navigator">
			<view class="navigator-item" v-for="(item,index) in tabBar.list" :key="item.pagePath" @click="switchTab(index,item)">
				<img :src="item.iconPath" class="icon" v-if="selectedIndex !== index">
				<img :src="item.selectedIconPath" class="icon" v-else>
				<text :class="['item-text',{'text-active':selectedIndex === index}]">{{item.text}}</text>
			</view>
		</view>
	</view>
</template>
 
<script>
	export default {
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					console.log(to);
					if (to?.meta?.isTabBar) {
						// this.__path__ = this.$route.path
						this.showselected = true
						const index = this.tabBar.list.findIndex(item => to?.meta?.pagePath === item.pagePath)
						if (index > -1) {
							this.selectedIndex = index
						}
					}
				}
			}
		},
		data() {
			return {
				selectedIndex: 0,
				showselected: false,
				tabBar: {
					list: [
						{
							"selectedIconPath": "static/icon/home_selected.png",
							"iconPath": "static/icon/home.png",
							"pagePath": "pages/index/home",
							"text": "首页"
						},
						{
							"selectedIconPath": "static/icon/policy_selected.png",
							"iconPath": "static/icon/policy.png",
							"pagePath": "pages/index/policy",
							"text": "政策"
						},
						{
							"selectedIconPath": "static/icon/match_selected.png",
							"iconPath": "static/icon/match.png",
							"pagePath": "pages/index/match",
							"text": "赛事"
						},
						{
							"selectedIconPath": "static/icon/user_selected.png",
							"iconPath": "static/icon/user.png",
							"pagePath": "pages/index/mine",
							"text": "我的"
						}
					]
				},
			}
		},
		methods: {
			switchTab(index, item) {
				let url = '/' + item.pagePath
				let pagePath = url
				const detail = {
				  index,
				  pagePath
				}
				
				if (this.$route?.path !== url) {
					// this.__path__ = this.$route.path
				    if(url == '/pages/index/mine' && !uni.getStorageSync('isLogin')){
						console.log('tologin');
						uni.navigateTo({
						  // url:'/pages/index/login'
						  url:'/pages/index/otherLogin'
						})
						return
				    }
				    uni.switchTab({
				      from: 'tabBar',
				      url,
				      detail
				    })
				} else {
				  // UniServiceJSBridge.emit('onTabItemTap', detail)
				}
				this.selectedIndex = index
				// this.$emit('switchTab', detail)
			}
		},
	}
</script>

 
<style lang="scss" scoped>
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		z-index: 999;
		background: #F5F5F5;
		border-top: 2rpx solid #eee;
	}
 
	.navigator {
		display: flex;
		justify-content: space-between;
		width: 85%;
		margin: 0 auto;
		padding: 20rpx;
	}
 
	.navigator-item {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 50rpx;
		height: 100%;
	}
 
	.item-text {
		margin-top: 6rpx;
		color: #777E86;
		font-size: 24rpx;
	}
 
	.text-active {
		color: #2E92FD !important;
	}
 
	.icon {
		width: 20px;
		height: 20px;
	}
</style>
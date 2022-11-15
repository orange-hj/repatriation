<template>
	<view class="">
		<!-- 功能板块 -->
		<view class="user-control-plate">
			<view class="user-control">
				<view class="u_c_item" @click="toProfile">
					<view class="icon">
						<text class="iconfont icon-personal"></text>
					</view>
					<view class="icon_name">个人资料</view>
				</view>
				<view class="u_c_item" @click="toCouponBag">
					<view class="icon">
						<text class="iconfont icon-coupon"></text>
					</view>
					<view class="icon_name">我的券包</view>
				</view>
				<view class="u_c_item">
					<view class="icon">
						<text class="iconfont icon-collection"></text>
					</view>
					<view class="icon_name">我的收藏</view>
				</view>
				<view class="u_c_item" @click="toAboutUs">
					<view class="icon">
						<text class="iconfont icon-about"></text>
					</view>
					<view class="icon_name">关于我们</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	props:{
		isLogin:{
			type:Boolean
		},
		baseInfo:{
			type:Object
		},
	},
	data(){
		return{
			
		}
	},
		
	methods:{
		toProfile(){
			if(!uni.getStorageSync('isLogin')){
				uni.navigateTo({
					url:"/pages/authentication/login"
				})
				return
			}
			uni.navigateTo({
				url:"/pages/mine/profile"
			})
		},
		toCouponBag(){
			uni.navigateTo({
				url:"/pages/mine/couponList"
			})
		},
		toAboutUs(){
			uni.navigateTo({
				url:"/pages/mine/aboutUs"
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.user-control-plate{
	padding-top: 20rpx;
	.user-control{
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-radius: 16rpx;
		.u_c_item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			padding: 24rpx 0;
			.icon{
				display: flex;
				justify-content: center;
				align-items: center;
				line-height: 1;
				color: #333;
			}
			.iconfont{
				font-size: 36rpx;
			}
			.icon_name{
				margin-top: 16rpx;
				font-size: 26rpx;
				color: #333;
			}
		}
	}
}
</style>
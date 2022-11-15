<template>
    <view class="login-page page-common">
        <view class="login-wrap">
            <view class="login-top">
            	<view class="logo">
					<image class="img" :src="logoUrl" mode="aspectFill"></image>
            	</view>
            </view>
			<view class="login-content">
				<view class="content-wrap">
					<view class="content-text">
						<view class="content-text-item">
							<text class="spot"></text>
							<text>需要授权您的微信进行登录/注册;</text>
						</view>
						<view class="content-text-item">
							<text class="spot"></text>
							<text>授权登录代表您已阅读本站 
								<text class="agreement">《用户服务协议》</text>和 
								<text class="agreement">《隐私协议》</text> ;
							</text>
						</view>
					</view>
					<button class="login-btn" @click="toLogin">同意用户协议，并授权登录</button>
				</view>
			</view>
        </view>
    </view>
</template>

<script>

import { login,getToken } from "@/api/login/login.js"
export default {
    data() {
        return {
			logoUrl:require("@/static/images/gaoxiao-logo.png")
		};
    },
	onLoad(option){
		
	},
    methods: {
		toLogin(){
			uni.showLoading({
				title:"登录中"
			})
			login().then(res =>{
				console.log(res);
				getToken({code:res.code}).then(res =>{
					console.log(res);
					uni.hideLoading()
					uni.setStorageSync('isLogin',true)
					uni.setStorageSync('token',res.result.token)
					uni.setStorageSync('userInfo',res.result.userInfo)
					this.$globalData.toast({title:'登录成功'}).then(res =>{
						uni.switchTab({
							url:'/pages/index/home'
						})
					})
				}).catch(err =>{
					uni.hideLoading()
					this.$globalData.toast({title:'登录失败'}).then(res =>{})
				})
			},err =>{
				console.log('login');
				uni.hideLoading()
				this.$globalData.toast({title:'登录失败'}).then(res =>{})
			}).catch(err =>{
				console.log('login1');
				uni.hideLoading()
				this.$globalData.toast({title:'登录失败'}).then(res =>{})
			})
		}
    },
	mounted(){
		
	}
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1000px) {
	.content-wrap{
		width: 60% !important;
	}
}
@media screen and (min-width: 700px) {
}

.login-page{
	width: 100%;
	height: 100%;
	background-color: #F2F2F2;
	.login-top{
		padding-top: 80rpx;
		padding-bottom: 180rpx;
		background-color: #3781C3;
		.logo{
			margin: 0 auto;
			padding-top: 20rpx;
			width: 160rpx;
			height: 160rpx;
			.img{
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
	}
	.login-content{
		.content-wrap{
			margin: 0 auto;
			padding: 40rpx 60rpx;
			width: 90%;
			color: #8F8D8B;
			border-radius: 24rpx;
			background-color: #fff;
			box-sizing: border-box;
			transform: translate(0, -25%);
			text{
				line-height: 1.8em;
				font-size: 32rpx;
			}
			.spot{
				display: inline-block;
				margin-right: 10rpx;
				width: 12rpx;
				height: 12rpx;
				border-radius: 50%;
				background-color: #8F8D8B;
			}
			.agreement{
				color: #3781C3;
			}
			.login-btn{
				margin-top: 88rpx;
				padding: 4rpx 0;
				font-size: 32rpx;
				color: #fff;
				border: none;
				border-radius: 48rpx;
				background-color: #07C160;
			}
		}
		
	}
}
</style>

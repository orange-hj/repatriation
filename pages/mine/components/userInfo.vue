<template>
	<view class="user-info-page">
		<!-- 用户信息 -->
		<view class="user-info-plate">
			<view class="user-info" v-if="!!isLogin" @click="toProfile">
				<view class="user-image">
					<image :src="baseInfo.avatar" mode="aspectFill"></image>
					<view class="sex"  v-if="isLogin && baseInfo.auditStatus == 2">
						<view class="man" v-if="baseInfo.sex === '男'">
							<view class="icon iconfont icon-sex-boy" style="font-size: 24rpx;"></view>
						</view>
						<view class="woman" v-else>
							<view class="icon iconfont icon-sex-girl" style="font-size: 24rpx;"></view>
						</view>
					</view>
				</view>
				<view class="user-name">
					<view class="name">
						{{baseInfo.nickName}}
					</view>
					<view class="label" v-if="baseInfo.auditStatus == 2">
						<view>{{baseInfo.name}}</view>
						<view class="label-wrap">
							<text class="label_1">已认证</text>
							<text class="label_2">学生</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="user-info" v-else>
				<view class="user-image">
					<view class="image-wrap">
						<image :src="defaultAvatarUrl" mode="aspectFill"></image>
					</view>
				</view>
				<view class="user-name" @click="toLogin">
					<view class="name">
						请登录
					</view>
				</view>
			</view>
		</view>
		
		<!-- <view class="tips-plate" v-if="baseInfo.auditStatus != 2 && isLogin">
			<view class="tips-wrap" @click="toAuth">
				<view class="tips-left">
					完成身份认证，享受更多权益
				</view>
				<view class="tips-right">
					<text>去认证</text>
					<text class="icon iconfont icon-more" style="font-size: 26rpx;"></text>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
export default {
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
			defaultAvatarUrl:require('@/static/images/my-avatar.png')
		}
	},
	methods:{
		toLogin(){
			uni.navigateTo({
				url:'/pages/login/login'
			})
		},
		toAuth(){
			if(this.baseInfo?.auditStatus && this.baseInfo?.auditStatus != 0){
				uni.navigateTo({
					url:'/pages/authentication/authResult'
				})
				return
			}
			uni.navigateTo({
				url:'/pages/authentication/auth'
			})
		},
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
	}
}
</script>

<style lang="scss" scoped>
.user-info-plate{
	padding: 40rpx 32rpx 20rpx;
	.user-info{
		display: flex;
		align-items: center;
		.user-image{
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 124rpx;
			height: 124rpx;
			border-radius: 50%;
			background-color: #fff;
			.image-wrap{
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 112rpx;
				height: 112rpx;
				border-radius: 50%;
				background-color: #f7f7f7;
				box-sizing: border-box;
				image{
					width: 78rpx;
					height: 78rpx;
				}
			}
			.sex{
				position: absolute;
				bottom: 0;
				right: 0rpx;
				color: #fff;
				line-height: 1;
				.man{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
					background-color: #6CC5FF;
				}
				.woman{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
					background-color: #FBAB94;
				}
			}
			image{
				width: 112rpx;
				height: 112rpx;
				border-radius: 50%;
			}
		}
		.user-name{
			flex: 1;
			padding: 20rpx 0 14rpx 30rpx;
			.name{
				font-size: 32rpx;
				font-weight: 700;
			}
			.label{
				display: flex;
				align-items: center;
				margin-top: 24rpx;
				line-height: 1;
				font-size: 28rpx;
				.label-wrap{
					display: flex;
					justify-content: center;
					align-items: center;
				}
				text{
					margin-left: 16rpx;
					padding: 8rpx 16rpx;
					font-size: 22rpx;
					border-radius: 28rpx;
				}
				.label_1{
					background-color: #FFCC33;
				}
				.label_2{
					background-color: #00B000;
				}
				.label_3{
					background-color: #ccc;
				}
			}
		}
	}
}
.tips-plate{
	padding: 0 32rpx;
	margin-bottom: 20rpx;
	.tips-wrap{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 32rpx;
		font-size: 26rpx;
		color: #FF684F;
		border-radius: 16rpx;
		background-color: #FFEABD;
	}
}

</style>
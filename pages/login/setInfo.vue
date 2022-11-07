<template>
	<view class="set-info-page page-common">
		<view class="set-info-container">
			<view class="set-info-wrap">
				<view class="info">
					<view class="tip">
						因微信授权规则调整，需要您单独设置头像昵称信息
					</view>
					<view class="touxiang">
						<button open-type="chooseAvatar" @chooseavatar="onChooseAvatar" style="border: 2rpx dashed #9CC0E0;">
							<view class="image-wrap" v-if="!avatarUrl">
								<image class="image" src="http://gx.scjfu.com/static/other/avatar.png" mode="aspectFill" style="width: 100%;height: 100%;"></image>
							</view>
							<view class="image-wrap" v-else>
								<image class="image" :src="avatarUrl" mode="aspectFill" style="width: 100%;height: 100%;"></image>
							</view>
						</button>
						<view class="set">
							设置头像
						</view>
					</view>
					<view class="name">
						<view class="set">
							设置昵称
						</view>
						<input type="nickname" placeholder="请输入昵称" v-model="nickName" @blur="onBlur">
					</view>
				</view>
				
				<view class="btn">
					<button @click="submit">确认</button>
					<view class="unset" @click="unset">
						暂不设置
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

import { getUserInfo } from '@/api/user/user.js'
import config from "@/config.js"
import { pathToBase64,base64ToPath } from "@/utils/util.js"

export default{
	data(){
		return{
			navTitle:'设置头像昵称',
			systemInfo: uni.getStorageSync('systemInfo'),
			avatarUrl:'',
			nickName:''
		}
	},
	onHide(){
		this.unset()
	},
	methods:{
		onBlur(e){
			console.log('blur');
			console.log(e.detail);
			console.log(this.avatarUrl);
			console.log(this.nickName);
		},
		submit(){
			const param = {
				session_key: this.systemInfo.session_key,
				openid: this.systemInfo.openid,
				unionid: this.systemInfo.unionid,
				appId: config.AppId,
				avatar:this.avatarUrl,
				nickname:this.nickName
			}
			getUserInfo(param).then(res =>{
				uni.setStorageSync('token',res.data.data.access_token)
				uni.setStorageSync('userInfo',res.data.data.scCustom)
				uni.setStorageSync('authStatus',res.data.data.scCustom.auditStatus)
				
				this.$globalData.toast({title:'设置成功',url:uni.getStorageSync('inviteCode')? '/pages/authentication/auth' : '/pages/mine'})
			})
		},
		unset(){
			const param = {
				session_key: this.systemInfo.session_key,
				openid: this.systemInfo.openid,
				unionid: this.systemInfo.unionid,
				appId: config.AppId,
				avatar:this.avatarUrl,
				nickname:this.nickName
			}
			getUserInfo(param).then(res =>{
				uni.setStorageSync('token',res.data.data.access_token)
				uni.setStorageSync('userInfo',res.data.data.scCustom)
				uni.setStorageSync('authStatus',res.data.data.scCustom.auditStatus)
				if(uni.getStorageSync('inviteCode')){
					uni.navigateTo({
						url:'/pages/authentication/auth'
					})
				}else{
					uni.switchTab({
						url:'/pages/mine'
					})
				}
			})
		},
		//获取微信头像
		onChooseAvatar(e){
			const that = this
			const { avatarUrl } = e.detail 
			pathToBase64(avatarUrl).then(res =>{
				console.log(res);
				that.avatarUrl = res
			})
		},
	}
}
</script>

<style lang="scss" scoped>
.set-info-page{
	background-color: #fff;
	.set-info-container{
		.set-info-wrap{
			padding: 32rpx;
		}
		.info{
			display: flex;
			flex-direction: column;
			align-items: center;
			.tip{
				font-size: 26rpx;
				color: #999;
			}
			.touxiang{
				padding: 80rpx 0 60rpx;
				text-align: center;
				button{
					padding: 0;
					width: 220rpx;
					height: 220rpx;
				}
				.image-wrap{
					width: 100%;
					height: 100%;
					.image{
						width: 100%;
						height: 100%;
					}
				}
				.set{
					padding: 20rpx 0;
					font-size: 32rpx;
					color: #333;
				}
			}
			.name{
				display: flex;
				justify-content: space-between;
				width: 100%;
				padding: 30rpx 0;
				border-bottom: 2rpx solid #ddd;
				.set{
					line-height: 1.4rem;
					margin-right: 40rpx;
				}
				input{
					flex: 1;
				}
			}
		}
		.btn{
			padding: 60rpx 0;
			text-align: center;
			button{
				background-color: #3781C3;
				color: #fff;
				font-size: 36rpx;
			}
			.unset{
				margin-top: 20rpx;
				padding: 20rpx;
				font-size: 36rpx;
				color: #3781C3;
			}
		}
	}
}
</style>
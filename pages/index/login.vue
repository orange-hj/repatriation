<template>
	<view class="login-page page-common">
		<view class="nav-top" :style="{ paddingTop: statusBar + 'px' }"></view>
		<view class="login-page-container">
			<view class="close-btn">
				<view class="btn-wrap" @click="closeLogin">
					<text class="iconfont icon-close"></text>
				</view>
				<view class="more-btn" @click="more">
					<text>更多</text>
				</view>
			</view>
			<view class="content">
				<view class="user-info-plate">
					<view class="avatar">
						<view class="image-wrap">
							<image class="image" src="../../static/images/my-avatar.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="user-name">
						<text>{{userInfo.user_name}}</text>
					</view>
				</view>
				<view class="login-plate">
					<!-- <view class="phone login-plate-item">
						<view class="label">
							<text>+86</text>
						</view>
						<view class="input">
							<input type="text" maxlength="11" v-model="phoneNumber">
						</view>
					</view> -->
					<view class="code login-plate-item" v-if="loginType == 0">
						<view class="input">
							<input type="number" placeholder="输入验证码" class="input" v-model="vcode">
						</view>
						<view class="get-code">
							<view class="send-code" @click="sendCode" v-if="!isSendCode">
								获取验证码
							</view>
							<view class="send-code" v-if="!!isSendCode">
								{{count}}秒后发送
							</view>
						</view>
					</view>
					<view class="code login-plate-item" v-if="loginType == 1">
						<view class="icon">
							<text class="iconfont icon-about"></text>
						</view>
						<view class="input">
							<input type="number" placeholder="请输入密码" class="input" v-model="vcode">
						</view>
						<view class="get-code">
							<view class="send-code" @click="forgetPsw">
								忘记密码
							</view>
						</view>
					</view>
					<view class="login-btn login-plate-item">
						<view class="btn-wrap">
							<text class="btn">登录</text>
						</view>
					</view>
					<view class="change-type login-plate-item">
						<view class="btn-wrap" v-if="loginType == 0" @click="changeLoginType(1)">
							<text class="">账号密码登录</text>
						</view>
						<view class="btn-wrap" v-if="loginType == 1" @click="changeLoginType(0)">
							<text class="">短信验证码登录</text>
						</view>
					</view>
				</view>
			</view>
			<view class="tips">
				<view class="choose-tips" @click="chooseTips">
					<radio-group>
						<radio :checked="checkTips" style="transform: scale(0.7,0.7);"></radio>
					</radio-group>
				</view>
				<view class="tips-content">
					<text style="color: #999;">您已阅读并同意</text>
					<text>《xxxxxxxx服务协议》《隐私权政策》</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/api/login/login.js'
import * as utils from '@/utils/util'; 
export default{
	data(){
		return{
			statusBar:'',		//手机顶部高度
			
			checkTips:false,	//协议
			userInfo:{},		//用户信息
			phoneNumber:'',		//手机号
			vcode:'',			//验证码
			count:60,			//获取验证码倒计时
			isSendCode:false,	//是否发送验证码
			loginType:0,		//密码登录或验证码登录（0 验证码 / 1 密码）
			
		}
	},
	onLoad(){
		this.fetchData()
		this.statusBar = this.$StatusBar
		console.log(this.$StatusBar);
	},
	methods:{
		//获取数据
		fetchData(){
			getUserInfo().then(res =>{
				this.userInfo = res.data[0]
			})
		},
		//关闭
		closeLogin(){
			uni.navigateBack()
		},
		//更多
		more(){
			let menu = [
				{
					title: '注册',
				},
				{
					title: '遇到问题？',
				}
			]
			utils.showActionSheet(menu).then(res =>{
				if(res == 0){
					//注册
					
				}
				if(res == 1){
					//遇到问题
					this.$globalData.toast({title:'遇到问题问百度'})
				}
				console.log(res);
			})
		},
		//改变登录方式
		changeLoginType(type){
			this.loginType = type
		},
		//发送验证码
		sendCode(){
			if(!this.phoneNumber.length){
				return toast('请输入手机号',"error")
			}
			if(this.phoneNumber.length != 11){
				return toast('手机号码格式有误',"error")
			}
		},
		// 倒计时
		countDown(){
			const that = this
			this.count --
			if(this.count < 0){
				this.isSendCode = false
				return
			}
			setTimeout(function() {
				that.countDown()
			},1000)
		},
		//勾选协议
		chooseTips(){
			this.checkTips = !this.checkTips
		}
	}
}
</script>

<style lang="scss" scoped>
.login-page{
	.login-page-container{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		height: 100%;
		padding-bottom: 32rpx;
		.close-btn{
			display: flex;
			justify-content: space-between;
			padding: 32rpx;
		}
		.content{
			flex: 1;
			.user-info-plate{
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 100rpx 0 60rpx;
				.avatar{
					width: 148rpx;
					height: 148rpx;
					.image-wrap{
						width: 100%;
						height: 100%;
						.image{
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
				}
				.user-name{
					margin-top: 20rpx;
					font-size: 28rpx;
					color: #666;
				}
			}
			.login-plate{
				display: flex;
				flex-direction: column;
				.login-plate-item{
					display: flex;
					align-items: center;
					width: 100%;
					padding: 10rpx 20rpx;
				}
				.phone{
					border-bottom: 2rpx solid #f1f1f1;
					.label{
						margin-right: 32rpx;
						font-size: 28rpx;
						color: #000;
					}
					.input{
						flex: 1;
					}
				}
				.code{
					border-bottom: 2rpx solid #f1f1f1;
					.icon{
						margin-right: 20rpx;
					}
					.input{
						flex: 1;
					}
					.get-code{
						margin-left: 32rpx;
						font-size: 26rpx;
						color: #000;
					}
				}
				.login-btn{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					margin-top: 60rpx;
					.btn-wrap{
						width: 100%;
						padding: 20rpx 0;
						text-align: center;
						background-color: #EBD32B;
						border-radius: 48rpx;
						.btn{
							font-size: 36rpx;
							color: #888;
						}
					}
				}
				.change-type{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					margin-top: 30rpx;
					font-size: 28rpx;
					color: #666;
				}
			}
		}
		.tips{
			display: flex;
			align-items: flex-start;
			.choose-tips{
				flex-shrink: 0;
				transform: translate(0, -4rpx);
			}
			.tips-content{
				flex: 1;
				font-size: 26rpx;
			}
			/* radio 边框颜色 */
			/deep/ uni-radio .uni-radio-input{
				border-color: #C0C2C9!important;
			}
			 
			/* radio 选中后的样式 */
			uni-radio .uni-radio-input.uni-radio-input-checked{
				background-color: #248067!important;
				border-color: #248067!important;
				background-clip: content-box!important;
				padding: 6rpx!important;
				box-sizing: border-box;
			}
			 
			/* radio 选中后的图标样式*/
			uni-radio .uni-radio-input.uni-radio-input-checked::before{
				display: none!important;
			}
		}
	}
}
</style>
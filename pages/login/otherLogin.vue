<template>
	<view class="login-page page-common">
		<view class="nav-top" :style="{ paddingTop: $StatusBar + 'px' }"></view>
		<view class="login-page-container">
			<view class="login-page-wrap">
				<view class="close-btn">
					<view class="btn-wrap" @click="closeLogin">
						<text class="iconfont icon-close"></text>
					</view>
				</view>
				
				<view class="content">
					<view class="top">
						<view class="title">
							<text>亲，欢迎登录</text>
						</view>
						<view class="subtitle">
							<text>没有账号？</text>
							<text class="register" @click="toRegister">立即注册</text>
						</view>
					</view>
					<view class="login-plate">
						<view class="phone login-plate-item" v-if="loginType == 0">
							<view class="label">
								<text>+86</text>
							</view>
							<view class="input">
								<input type="text" maxlength="11" v-model="phoneNumber" placeholder="请输入手机号">
							</view>
						</view>
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
						
						<view class="phone login-plate-item" v-if="loginType == 1">
							<view class="input">
								<input type="text" maxlength="11" v-model="phoneNumber" placeholder="请输入手机号">
							</view>
						</view>
						<view class="code login-plate-item" v-if="loginType == 1">
							<view class="input">
								<input type="number" placeholder="请输入密码" class="input" v-model="psw">
							</view>
							<view class="icon">
								<text class="iconfont icon-about"></text>
							</view>
						</view>
						
						<view class="change-type login-plate-item">
							<view class="change-type-wrap" v-if="loginType == 0">
								<view class="btn-wrap" v-if="loginType == 0" @click="changeLoginType(1)">
									<text class="">账号密码登录</text>
								</view>
							</view>
							<view class="change-type-wrap" v-if="loginType == 1">
								<view class="btn-wrap" @click="changeLoginType(0)">
									<text class="">短信验证码登录</text>
								</view>
								<view class="get-code">
									<view class="send-code" @click="forgetPsw">
										忘记密码
									</view>
								</view>
							</view>
							
						</view>
						<view class="login-btn login-plate-item">
							<view class="btn-wrap" @click="login">
								<text class="btn">登录</text>
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
		
		
			<view class="popup" :style="{display:showPopup}">
				<view class="popup-wrap">
					<view class="popup-content">
						<view class="title">
							<text>服务协议及隐私保护</text>
						</view>
						<view class="content">
							<text>您已阅读并同意</text>
							<text>您已阅读并同意您已阅读并同意您已阅读并同意</text>
							<text>您已阅读并同意您已阅读并同意您已阅读并同意您已阅读并同意您已阅读并同意</text>
						</view>
						<view class="btn-wrap">
							<view class="btn btn1" @click="agreent">
								<text>不同意</text>
							</view>
							<view class="btn btn2" @click="agree">
								<text>同意</text>
							</view>
						</view>
					</view>
					<view class="close-btn" @click="closePopup">
						<text>x</text>
					</view>
				</view>
				<view class="mask">
					
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
			$StatusBar:'',		//手机顶部高度
			checkTips:false,	//协议
			userInfo:{},		//用户信息
			phoneNumber:'',		//手机号
			vcode:'',			//验证码
			count:60,			//获取验证码倒计时
			isSendCode:false,	//是否发送验证码
			loginType:1,		//密码登录或验证码登录（0 验证码 / 1 密码）
			psw:'',				//密码
			
			showPopup:'none'	//显示隐藏弹窗
		}
	},
	onLoad(){
		this.fetchData()
		this.$StatusBar = this.$StatusBar
		console.log(this.$StatusBar);
		
	},
	methods:{
		//获取数据
		fetchData(){
			
		},
		//关闭
		closeLogin(){
			uni.navigateBack()
		},
		//去注册
		toRegister(){
			uni.navigateTo({
				url:'/pages/index/register'
			})
		},
		forgetPsw(){
			
		},
		//改变登录方式
		changeLoginType(type){
			this.loginType = type
		},
		//发送验证码
		sendCode(){
			if(!this.phoneNumber.length){
				return this.$globalData.toast({title:'请输入手机号',type:'error'})
			}
			if(this.phoneNumber.length != 11){
				return this.$globalData.toast({title:'手机号有误',type:'error'})
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
		//登录
		login(){
			
			uni.setStorageSync('isLogin',true)
			return
			
			const that = this
			if(that.phoneNumber.length == 0){
				return that.$globalData.toast({title:'请输入手机号'})
			}
			if(that.phoneNumber.length != 11){
				return that.$globalData.toast({title:'手机号有误'})
			}
			if(!that.checkTips){
				that.showPopup = 'flex'
				return
			}
			if(that.registerType == 0){
				if(!that.vcode){
					return that.$globalData.toast({title:'请输入验证码'})
				}
			}
			if(that.registerType == 1){
				if(!that.psw){
					return that.$globalData.toast({title:'请输入密码'})
				}
			}
			uniCloud.callFunction({
				name:'login',
				data:{
					type:that.loginType,
					phone:that.phoneNumber,
					password:that.psw
				}
			}).then(res =>{
				console.log(res);
				if(res.result.code == 200){
					uni.setStorageSync('islogin',true)
					that.$globalData.toast({title:'登录成功'}).then(res =>{
						uni.switchTab({
							url:'/pages/index/mine'
						})
					})
				}else{
					that.$globalData.toast({title:res.result.message})
					that.phoneNumber = ''
					that.psw = ''
				}
			})
		},
		//勾选协议
		chooseTips(){
			this.checkTips = !this.checkTips
		},
		agreent(){
			this.showPopup = 'none'
			this.checkTips = false
		},
		agree(){
			this.showPopup = 'none'
			this.checkTips = true
		},
		closePopup(){
			this.showPopup = 'none'
			this.checkTips = false
		}
	}
}
</script>

<style lang="scss" scoped>
.login-page{
	display: flex;
	flex-direction: column;
	.login-page-container{
		flex: 1;
		.popup{
			width: 100%;
			height: 100%;
			.popup-wrap{
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 80%;
				max-width: 350px;
				z-index: 100;
				.popup-content{
					display: flex;
					flex-direction: column;
					align-items: stretch;
					padding: 40rpx 46rpx;
					text-align: center;
					border-radius: 32rpx;
					background-color: #fff;
					.title{
						font-size: 32rpx;
						color: #000;
					}
					.content{
						margin-top: 12rpx;
						min-height: 60px;
						text-align: start;
						font-size: 26rpx;
						color: #999;
					}
					.btn-wrap{
						display: flex;
						justify-content: space-around;
						align-items: center;
						margin-top: 40rpx;
						padding: 0 20rpx;
						.btn{
							flex: 1;
							padding: 20rpx 32rpx;
							border-radius: 52rpx;
						}
						.btn1{
							margin-right: 32rpx;
							color: #EBD32B;
							background-color: #fff;
							border: 2rpx solid #EBD32B;
						}
						.btn2{
							color: #fff;
							background-color: #EBD32B;
						}
					}
				}
				.close-btn{
					margin-top: 40rpx;
					width: 70rpx;
					height: 70rpx;
					line-height: 70rpx;
					text-align: center;
					color: #fff;
					border-radius: 50%;
					background-color: rgba(0, 0, 0, 0.1);
				}
			}
			.mask{
				position: fixed;
				top: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.3);
			}
		}
	}
	.login-page-wrap{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		padding: 0 32rpx;
		height: 100%;
		padding-bottom: 32rpx;
		.close-btn{
			display: flex;
			justify-content: space-between;
			padding: 32rpx;
		}
		.content{
			flex: 1;
			.top{
				padding: 64rpx 20rpx;
				.title{
					font-size: 56rpx;
					color: #000;
				}
				.subtitle{
					margin-top: 10rpx;
					font-size: 32rpx;
					.register{
						color: #EBD32B;
					}
				}
			}
			.login-plate{
				display: flex;
				flex-direction: column;
				.login-plate-item{
					display: flex;
					align-items: center;
					padding: 16rpx 20rpx;
					margin-bottom: 36rpx;
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
					// width: 100%;
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
					justify-content: space-between;
					align-items: center;
					// width: 100%;
					font-size: 28rpx;
					color: #666;
					.change-type-wrap{
						flex: 1;
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
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
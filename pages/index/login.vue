<template>
	<view class="login-page page-common">
		<view class="login-page-container">
			<view class="close-btn">
				<view class="btn-wrap">
					<text class="iconfont icon-close"></text>
				</view>
			</view>
			<view class="user-info-plate">
				<view class="avatar">
					<view class="image-wrap">
						<image class="image" src="../../static/images/my-avatar.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="user-name">
					<text>用户名</text>
				</view>
			</view>
			<view class="login-plate">
				<view class="phone login-plate-item">
					<view class="label">
						<text>+86</text>
					</view>
					<view class="input">
						<input type="text">
					</view>
				</view>
				<view class="code login-plate-item">
					<view class="input">
						<input type="text">
					</view>
					<view class="get-code">
						<text>获取验证码</text>
					</view>
				</view>
				<view class="login-btn login-plate-item">
					<view class="btn-wrap">
						<text class="btn">登录</text>
					</view>
				</view>
				<view class="tips login-plate-item">
					<view class="choose-tips">
						
					</view>
					<view class="tips-content">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.login-page{
	.login-page-container{
		position: relative;
		.close-btn{
			position: absolute;
			top: 40rpx;
			left: 32rpx;
		}
		.user-info-plate{
			display: flex;
			flex-direction: column;
			align-items: center;
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
			margin-top: 66rpx;
			.login-plate-item{
				display: flex;
				align-items: center;
				padding: 32rpx;
			}
			.phone{
				.label{
					font-size: 28rpx;
					color: #000;
				}
				.input{
					
				}
			}
			.code{
				.input{
					
				}
				.get-code{
					font-size: 28rpx;
					color: #000;
				}
			}
			.login-btn{
				width: 100%;
			}
		}
	}
}
</style>
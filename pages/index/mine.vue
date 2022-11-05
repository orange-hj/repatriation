<template>
	<view class="mine-page page-common">
		<view class="mine-page-container">
			<view class="user-info-plate">
				<view class="avatar">
					<view class="image-wrap">
						<image class="image" src="../../static/images/gaoxiao-logo.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="info">
					<view class="title">
						<text>名字</text>
					</view>
					<view class="subtitle">
						<text>其他</text>
					</view>
				</view>
				<view class="setting-btn">
					<view class="btn-wrap">
						<text class="iconfont"></text>
					</view>
				</view>
			</view>
		</view>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
export default{
	data(){
		return{
			
		}
	}
}
</script>

<style lang="scss" scoped>
.mine-page{
	.mine-page-container{
		.user-info-plate{
			display: flex;
			align-items: center;
			padding: 32rpx;
			.avatar{
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
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
			.info{
				flex: 1;
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;
				.title{
					font-size: 32rpx;
					font-weight: bold;
					color: #000;
				}
				.subtitle{
					font-size: 26rpx;
					color: #999;
				}
			}
		}
	}
}
</style>
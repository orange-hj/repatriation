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
import { getUserInfo } from '@/api/user/user.js'
export default{
	data(){
		return{
			
		}
	},
	onLoad(){
		this.fetchData()
	},
	methods:{
		fetchData(){
			let token = uni.getStorageSync('token');
			uni.request({
				url:'https://9f4ac7c2-5851-4e96-bf4d-26837649e2dc.bspapp.com/getUserInfo',
				method:"GET",
				header:{Authorization: `Bearer ${token}`},
				data:{},
				success(res) {
					console.log(res);
				}
			})
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
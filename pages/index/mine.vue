<template>
    <view class="mine-page page-common">
		<view class="mine-page-container">
			<!-- <view class="nav">
				<navbar navType="1" title="个人中心" ></navbar>
			</view> -->
			<userInfo :isLogin="isLogin" :baseInfo="baseInfo"></userInfo>
			
			<view class="main">
				
				<control :isLogin="isLogin"></control>
				
				<view class="my-order">
					<view class="top">
						<view class="title">
							<text>我的订单</text>
						</view>
						<view class="more">
							<text>查看全部订单</text>
							<text class="icon iconfont icon-more"></text>
						</view>
					</view>
					<view class="content">
						<view class="user-control">
							<view class="u_c_item" @click="toProfile">
								<view class="icon">
									<text class="iconfont icon-personal"></text>
								</view>
								<view class="icon_name">待付款</view>
							</view>
							<view class="u_c_item" @click="toCouponBag">
								<view class="icon">
									<text class="iconfont icon-coupon"></text>
								</view>
								<view class="icon_name">代发货</view>
							</view>
							<view class="u_c_item">
								<view class="icon">
									<text class="iconfont icon-collection"></text>
								</view>
								<view class="icon_name">待收货</view>
							</view>
							<view class="u_c_item" @click="toAboutUs">
								<view class="icon">
									<text class="iconfont icon-about"></text>
								</view>
								<view class="icon_name">待评价</view>
							</view>
							<view class="u_c_item" @click="toAboutUs">
								<view class="icon">
									<text class="iconfont icon-about"></text>
								</view>
								<view class="icon_name">退款/售后</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="store-center">
					<view class="top" @click="toBusiness">
						<view class="title">
							<text>商家中心</text>
						</view>
						<view class="more">
							<text class="icon iconfont icon-more"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import navbar from "@/components/navBar.vue"
import userInfo from "@/pages/mine/components/userInfo.vue"
import control from "@/pages/mine/components/control.vue"

import { getUserInfo } from "@/api/user/user.js"
export default {
	components:{ navbar,userInfo,control },
    data() {
        return {
			navType:2,
			navTitle:'个人中心',
			navColor:'black',
			isLogin:uni.getStorageSync('isLogin'),
			baseInfo:null,
        };
    },
	onShow(){
		this.fetchData()
	},
    methods: {
		fetchData(){
			getUserInfo().then(res =>{
				console.log(res);
				this.baseInfo = res.data
			})
		},
		toBusiness(){
			uni.navigateTo({
				url:'/pages/business/business'
			})
		},
    }
};
</script>
<style lang="scss" scoped>
.mine-page{
	background-color: #fff;
	.mine-page-container{
		display: flex;
		flex-direction: column;
		background-color: #fff;
		height: 100%;
		.main{
			flex: 1;
			padding: 0 24rpx;
			background-color: #cecece;
			border-radius: 12px 12px 0 0;
			.my-order{
				display: flex;
				flex-direction: column;
				background-color: #fff;
				border-radius: 8px;
				.top{
					padding: 20rpx 32rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.title{
						font-size: 30rpx;
						color: #333;
					}
					.more{
						font-size: 24rpx;
						color: #999;
						.icon{
							font-size: 24rpx;
							color: #999;
						}
					}
				}
				.content{
					padding: 20rpx 32rpx;
					.user-control{
						display: flex;
						justify-content: space-between;
						align-items: center;
						background-color: #fff;
						.u_c_item{
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: space-between;
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
			}
			
			.store-center{
				margin-top: 24rpx;
				display: flex;
				flex-direction: column;
				background-color: #fff;
				border-radius: 8px;
				.top{
					padding: 24rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.title{
						font-size: 30rpx;
						color: #333;
					}
					.more{
						font-size: 24rpx;
						color: #999;
						.icon{
							font-size: 24rpx;
							color: #999;
						}
					}
				}
			}
		}
	}
}
</style>

<template>
    <view class="mine-page page-common">
		<view class="mine-page-container">
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
			isLogin:'',
			baseInfo:null,
        };
    },
	onShow(){
		this.isLogin = uni.getStorageSync('isLogin')
		this.fetchData()
	},
    methods: {
		fetchData(){
			getUserInfo().then(res =>{
				console.log(res);
				this.baseInfo = res.data
			})
		},
		toLogin(){
			uni.navigateTo({
				url:'/pages/login/otherLogin'
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

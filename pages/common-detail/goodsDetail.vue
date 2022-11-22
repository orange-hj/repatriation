<template>
	<view class="goods-detail-page">
		<view class="goods-detail-container">
			<view class="plate1">
				<view class="user-plate">
					<view class="left">
						<view class="image-wrap">
							<image class="image" :src="userInfo.avatar" mode="aspectFill"></image>
						</view>
					</view>
					<view class="center">
						<view class="title">
							{{userInfo.nickName}}
						</view>
						<view class="subtitle">
							12分钟前来过
						</view>
					</view>
					<view class="right">
						<view class="btn-wrap" @click="follow">
							<view class="btn" v-if="!isFollow">
								+ 关注
							</view>
							<view class="btn" v-else>
								已关注
							</view>
						</view>
					</view>
				</view>
				<view class="goods-plate">
					<view class="top">
						<view class="price-wrap">
							<text class="text">￥</text>
							<text class="price">{{goodsInfo.price}}</text>
						</view>
						<view class="views">
							<text class="text">128人想要</text>
							<text class="text">2.7万浏览</text>
						</view>
					</view>
					<view class="bottom">
						<view class="intro-wrap">
							{{goodsInfo.intro}}
						</view>
						<view class="goods-image-wrap" v-if="goodsInfo.list.length">
							<view class="image-wrap" v-for="(item,index) in goodsInfo.list" :key="index">
								<image class="image" :src="item.url" mode="aspectFill"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="othor-plate">
					<view class="left">
						<view class="image-wrap">
							
						</view>
						<view class="content">
							<text class="text">担保交易</text>
						</view>
					</view>
					<view class="right">
						<view class="btn-wrap">
							<text class="btn">不喜欢</text>
						</view>
					</view>
				</view>
			</view>
			<view class="plate2">
				
			</view>
		
		</view>
		
		<view class="foot">
			<view class="foot-wrap">
				<view class="left">
					<view class="control1 control" @click="handleShowContact">
						<view class="icon">
							<text class=" iconfont icon-consult"></text>
						</view>
						<view class="text">
							<view class="btn">17</view>
						</view>
					</view>
					<view class="control2 control" @click="collection">
						<view class="icon">
							<text class=" iconfont icon-collection" :style="[{'color': (isCollection?'yellow':'')}]"></text>
						</view>
						<view class="text">
							<view class="btn">10</view>
						</view>
					</view>
				</view>
				<view class="right">
					<view class="btn-wrap">
						<view class="btn">
							卖同款
						</view>
					</view>
					<view class="btn-wrap">
						<view class="btn want">
							我想要
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getGoodsDetail } from '@/api/goods/goods.js'
export default{
	data(){
		return{
			id:'',
			userInfo:{},
			goodsInfo:{},
			
			
			isFollow:false,				//关注
			isCollection:false,			//收藏
		}
	},
	onLoad(option) {
		console.log(option);
		this.id = option.id
	},
	onShow() {
		this.fetchData()
	},
	methods:{
		fetchData(){
			getGoodsDetail({id:this.id}).then(res =>{
				console.log(res);
				this.userInfo = res.data.userInfo
				this.goodsInfo = res.data.goodsInfo
			})
		},
		//关注
		follow(){
			this.isFollow = !this.isFollow
			if(this.isFollow){
				this.$globalData.toast({title:"关注成功"})
			}else{
				this.$globalData.toast({title:"取消关注成功"})
			}
		},
		//收藏
		collection(){
			this.isCollection = !this.isCollection
			if(this.isCollection){
				this.$globalData.toast({title:"收藏成功，可以在个人主页我的收藏中查看"})
			}else{
				this.$globalData.toast({title:"取消收藏"})
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.goods-detail-page{
	.goods-detail-container{
		.user-plate{
			display: flex;
			align-items: center;
			padding: 32rpx;
			.left{
				flex-shrink: 0;
				margin-right: 24rpx;
				.image-wrap{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					.image{
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
			}
			.center{
				flex: 1;
				.title{
					line-height: 50rpx;
					font-size: 28rpx;
					font-weight: bold;
					color: #1C2030;
				}
				.subtitle{
					line-height: 30rpx;
					font-size: 24rpx;
					color: #69707F;
				}
			}
			.right{
				flex-shrink: 0;
				margin-left: 24rpx;
				.btn-wrap{
					padding: 10rpx 32rpx;
					background-color: #EAEAEA;
					border-radius: 36rpx; 
					.btn{
						font-size: 24rpx;
						color: #1C2030;
					}
				}
			}
		}
	
		.goods-plate{
			padding: 0 32rpx;
			.top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.price-wrap{
					font-size: 30rpx;
					font-weight: bold;
					color: #FF9200;
					.price{
						font-size: 44rpx;
					}
				}
				.views{
					.text{
						margin-left: 24rpx;
						font-size: 22rpx;
						color: #69707F;
					}
				}
			}
			.bottom{
				margin-top: 12rpx;
				line-height: 2;
				font-size: 28rpx;
				color: #1D1E2C;
				.intro-wrap{
					font-size: 32rpx;
					color: #1D1E2C;
				}
				.goods-image-wrap{
					display: flex;
					flex-direction: column;
					.image-wrap{
						margin: 12rpx 0;
						width: 100%;
						height: 240rpx;
						.image{
							width: 100%;
							height: 100%;
							border-radius: 24rpx;
						}
					}
				}
			}
		}
	}
	
	
	.foot{
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 20rpx 0;
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
		z-index: 1000;
		.foot-wrap{
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			width: 100%;
			box-sizing: border-box;
			.control{
				display: flex;
				flex-direction: column;
				align-items: center;
				.iconfont{
					font-size: 32rpx;
				}
				.text{
					margin-top: 4rpx;
					line-height: 14px;
					font-size: 20rpx;
					color: #6D6D6D;
				}
				.btn{
					line-height: 14px;
					font-size: 20rpx;
					color: #6D6D6D;
				}
			}
			.left{
				flex: 1;
				display: flex;
				justify-content: space-around;
				padding: 0 24rpx;
			}
			.right{
				flex:1.5;
				display: flex;
				padding-right: 32rpx;
				.btn-wrap{
					flex: 1;
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;
					.btn{
						width: 200rpx;
						padding: 10rpx 10rpx;
						text-align: center;
						font-size: 32rpx;
						color: #1D1E2C;
						background-color: #f5f5f5;
						border-radius: 36rpx;
						box-sizing: border-box;
					}
					.want{
						margin-left: 12rpx;
						font-weight: bold;
						background-color: yellow;
					}
				}
			}
		}
	}
}
</style>
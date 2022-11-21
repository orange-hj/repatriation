<template>
	<view class="home-page">
		<view class="home-page-container">
			<!-- 顶部 -->
			<view class="nav-wrap">
				<view class="nav" :style="{ height: navBarHeight + 'px'}" :class="{'showBgc' : isShowBgc}">
					<view class="nav-top" :style="{ paddingTop: navBarTop + 'px' }"></view>
					<view class="nav-mian">
						<view class="nav-main-left">
							<view class="icon-wrap icon-wrap_1" style="margin-right: 20rpx;" >
								<view class="icon iconfont icon-home"></view>
							</view>
							<view class="title">
								{{title? title : ""}}
							</view>
						</view>
					</view>
				</view>
				<view class="bgc-image">
					<image class="image" src="@/static/images/home/home_bgc.png" mode="widthFix"></image>
				</view>
				<view :style="{ paddingTop: navBarHeight + 'px' }"></view>
			</view>
			
			<view class="content-wrap">
				<view class="plate1">
					<!-- 搜索板块 -->
					<view class="search-plate">
						<view class="search-container">
							<view class="search-wrap">
								<view class="left" @click="chooseCity">
									<view class="city">
										厦门
									</view>
									<view class="btn">
										<text class="icon iconfont icon-toggle-down"></text>
									</view>
								</view>
								<view class="right">
									<view class="input">
										<u-search
											v-model="searchValue"
											placeholder="我想搜索点什么" 
											:showAction="false"
											:clearabled="false"
											searchIconColor="#999"
											searchIconSize="42rpx"
											searchIcon="search"
											maxlength="-1"
											height="auto"
											@search="search"
										></u-search>
									</view>
								</view>
							</view>
							<view class="btn-wrap">
								<view class="btn" @click="toShare()">
									<text class="icon iconfont icon-shareTo"></text>
								</view>
								<view class="btn" @click="showContact = true">
									<text class="icon iconfont icon-consult"></text>
								</view>
							</view>
							<view class="location-popup" v-if="showLocationPopup">
								<view class="mask">
									<view class="triangle">
									</view>
								</view>
								<view class="content">
									<view class="content-left" @click="toCity">
										<text>设置您所在的城市，以便为您推荐更相关的内容</text>
										<text class="sq">去设置</text>
									</view>
									<view class="close-popup" @click="closePopup">
										<view class="icon">
											<text class="iconfont icon-close" style="font-size: 22rpx;"></text>
										</view>
									</view>
								</view>
							</view>
						</view>
						
						<!-- 点击联系弹出层 -->
						<u-popup :show="showContact" 
							@close="close"
							mode="center"
							>
							<view class="contact">
								<view class="txt title">联系客服</view>
								<view class="QRcode"><image class="image" show-menu-by-longpress :src="contactData.imagePath" mode="aspectFill"></image></view>
								<view class="txt">联系电话</view>
								<view class="phone" @tap.stop.prevent="handlePhone">
									<view class="num">{{ contactData.phone }}</view>
									<view class="icon iconfont icon-kefu"></view>
								</view>
							</view>
						</u-popup>
					</view>
				
					<!-- banner -->
					<view style="padding-top:32rpx"></view>
					<bannerPlate :list="bannerList"></bannerPlate>
					<!-- 资讯 -->
					<view class="real-time-plate">
						<view class="real-time-container">
							<view class="left">
								<view class="image-wrap">
									<image class="image" src="@/static/images/home/mod_daily.png" mode="aspectFill"></image>
								</view>
							</view>
							<view class="right">
								<text class="text">最新资讯 买一送一！shit</text>
							</view>
						</view>
					</view>
				</view>
				
				<view class="plate2">
					<view class="goods-plate plate-common">
						<view class="title-wrap">
							<view class="left">
								<view class="title">
									<view class="image-wrap">
										<image class="image" src="http://gx.scjfu.com/static/icon/mod_policy.png" mode="widthFix"></image>
									</view>
									<view class="text">商品 都是商品</view>
								</view>
							</view>
							<view class="right">
								<view class="more" @click="toPolicyMore()">
									<view class="text">更多</view>
									<text class="icon iconfont icon-more-txt"></text>
								</view>
							</view>
						</view>
						<view class="goods-list">
							<view class="goods-item" v-for="(item,index) in goodsList" :key="index">
								<view class="image-wrap">
									<image class="image" :src="item.list[0].url" mode="widthFix"></image>
								</view>
								<view class="info-wrap">
									<view class="item-title">
										{{item.name || ''}}
									</view>
									<view class="item-intro">
										{{item.intro || ''}}
									</view>
									<view class="item-subtitle">
										<view class="item-time">
											价格：{{item.price}}
										</view>
										<!-- <view class="item-foot">
											<view class="item-address">
												<text class="icon iconfont icon-tag-position"></text>
												<text class="text">{{item.matchAddress || ''}}</text>
											</view>
											<view class="item-view">
												<text class="icon iconfont icon-browse"></text>
												<text class="text">{{item.views || ''}}</text>
											</view>
										</view> -->
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import bannerPlate from '@/components/home/bannerPlate'


import { homeGoodsList } from '@/api/goods/goods.js'
export default{
	components: { bannerPlate },
	data(){
		return{
			//顶部
			navBarHeight:this.$CustomBar,	//顶部height
			navBarTop:this.$StatusBar,		//顶部top
			title:'首页',					//顶部标题
			isShowBgc:false,				//是否固定顶部
			//数据
			showContact:false,				//联系弹窗
			searchValue:'',					//搜索内容
			
			bannerList:[],					//轮播图列表
			
			goodsList:[],
		}
	},
	onPageScroll(e) {
		let op = parseFloat(e.scrollTop*0.01)
		if(e.scrollTop < 10){
			this.isShowBgc = false
		}else{
			this.isShowBgc = true
		}
	},
	onLoad() {

	},
	onShow() {
		this.fetchData()
	},
	methods:{
		fetchData(){
			this.bannerList = [
				{imagePath:"https://img0.baidu.com/it/u=1705694933,4002952892&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669136400&t=9a0693b8ed55b6fbcba34a3264bf9ab1"},
				{imagePath:"https://img1.baidu.com/it/u=105002249,3897918256&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669136400&t=7eb4bddb1a6bcf164c8a0d22f0707497"},
				{imagePath:"https://img0.baidu.com/it/u=2028084904,3939052004&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669136400&t=1b493dd4f0c9f58308eb99560bb7f960"},
			]
			homeGoodsList({limit:5,page:1}).then(res =>{
				console.log(res);
				this.goodsList = res.data
			})
		},
		//关闭弹窗
		close(){
			this.showContact = false
		},
		//搜索
		search(){
			alert('搜索')
		},
		chooseCity(){
			
		},
		toShare(){
			
		},
	}
}
</script>

<style lang="scss" scoped>
.home-page{
	background-color: #F3F6FB;
	.home-page-container{
		.nav-wrap{
			position: relative;
			height: 516rpx;
			.bgc-image{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				.image{
					width: 100%;
					height: 100%;
				}
			}
			.showBgc{
				background: linear-gradient(to bottom, #499FF6, #71B9FA);
			}
			.nav{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.nav-mian{
					flex: 1;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 0 32rpx;
					.nav-main-left{
						display: flex;
						align-items: center;
						.title{
							color: #fff;
						}
						.icon-wrap{
							width: 62rpx;
							height: 62rpx;
							border-radius: 50%;
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.icon-wrap_1{
							color: #fff;
							background-color: rgba(#000, 0.2);
						}
					}
				}
			}
		}
		
		.content-wrap{
			margin-top: -328rpx;
			z-index: 100;
			box-sizing: border-box;
			.plate1{
				border-radius: 40rpx 40rpx 0 0;
				background-color: #fff;
				.search-plate{
					padding: 0 32rpx;
					padding-top: 32rpx;
					box-sizing: border-box;
					.search-container{
						display: flex;
						justify-content: space-between;
						align-items: center;
						position: relative;
						.search-wrap{
							flex: 1;
							display: flex;
							align-items: center;
							background-color: #F4F4F4;
							border-radius: 40rpx;
							.left{
								flex-shrink: 0;
								display: flex;
								align-items: center;
								padding: 12rpx 20rpx 12rpx 32rpx;
								border-right: 2rpx solid #E6E6E6;
								.city{
									line-height: 44rpx;
									font-size: 28rpx;
									color: #3A3A3A;
								}
								.btn{
									margin-left: 12rpx;
									.icon{
										font-size: 20rpx;
										color: #000;
									}
								}
							}
							.right{
								flex: 1;
								display: flex;
								align-items: center;
								padding: 12rpx 0;
								.btn{
									flex-shrink: 0;
									margin-right: 16rpx;
									.icon{
										font-size: 28rpx;
										color: #A5A5A5;
									}
								}
								.input{
									flex: 1;
									padding-right: 24rpx;
									font-size: 24rpx;
								}
								/deep/.u-search__content__input{
									font-size: 24rpx;
								}
							}
						}
						.btn-wrap{
							flex-shrink: 0;
							display: flex;
							align-items: center;
							padding-right: 4rpx;
							.btn:first-child{
								margin: 0 26rpx;
							}
							.btn{
								font-size: 28rpx;
								color: #1C2030;
								.icon{
									font-size: 36rpx;
									color: #1C2030;
								}
							}
						}
						.location-popup{
							position: absolute;
							left: 0;
							bottom: -68rpx;
							width: 100%;
							height: 66rpx;
							border-radius: 12rpx;
							z-index: 1000;
							box-sizing: border-box;
							.mask{
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								padding: 6rpx 0;
								background-color: #000;
								border-radius: 12rpx;
								opacity: 0.4;
								.triangle{
									position: absolute;
									top: -36rpx;
									left: 24rpx;
									width: 0;
									height: 0;
									border: 20rpx solid transparent;
									border-radius: 12rpx;
									border-bottom-color: #000;
								}
							}
							.content{
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								display: flex;
								justify-content: space-between;
								align-items: center;
								margin: 6rpx 0;
								line-height: 1.25;
								color: #fff;
								padding-left:30rpx;
								box-sizing: border-box;
								.content-left{
									flex: 1;
									display: flex;
									align-items: center;
									padding: 6rpx 0;
									font-size: 26rpx;
									.sq{
										flex-shrink: 0;
										padding: 4rpx 8rpx;
										margin-left: 8rpx;
										font-size: 26rpx;
										background-color: #3781C3;
										border-radius: 12rpx;
									}
								}
								.close-popup{
									padding: 6rpx 30rpx;
								}
							}
						}
					}
					.contact{
						padding: 40rpx 80rpx;
						display: flex;
						flex-direction: column;
						align-items: center;
						.title{
							font-size: 30rpx;
						}
						.txt {
							margin-bottom: 10rpx;
							text-align: center;
							font-size: 28rpx;
						}
						.QRcode {
							width: 400rpx;
							height: 400rpx;
							margin-bottom: 100rpx;
							position: relative;
							.image {
								width: 100%;
								height: 100%;
							}
						}
						.QRcode::after {
							content: '识别二维码添加客服';
							position: absolute;
							width: 100%;
							left: 0;
							bottom: -40rpx;
							z-index: 10;
							font-size: 20rpx;
							text-align: center;
						}
						.phone{
							display: flex;
							align-items: center;
							font-size: 28rpx;
							.icon{
								color: #333;
								margin-left: 4rpx;
							}
						}
					}
					.location-wrap{
						display: flex;
						align-items: center;
						padding-left: 10rpx;
						.city{
							font-size: 28rpx;
							color: #fff;
						}
					}
				}
			
				.real-time-plate{
					.real-time-container{
						display: flex;
						padding: 32rpx 0;
						margin: 0 32rpx;
						border-bottom: 1px solid #EAEAEA;
						.left{
							flex-shrink:0;
							padding-right: 20rpx;
							.image-wrap{
								width: 100rpx;
								height: 40rpx;
								.image{
									width: 100%;
									height: 100%;
								}
							}
						}
						.right{
							flex:1;
							position: relative;
							.text{
								padding-left: 20rpx;
								line-height: 40rpx;
								font-size: 28rpx;
								font-weight: bold;
								color: #1D1E2C;
							}
						}
						.right:before{
							content: '';
							position: absolute;
							top: 50%;
							left: 0;
							width: 1px;
							height: 14px;
							background-color: #EAEAEA;
							transform: translate(0,-50%);
						}
					}
				}
			}
		
			.plate2{
				margin-bottom: 32rpx;
				.goods-plate{
					.goods-list{
						display: flex;
						flex-wrap: wrap;
						padding: 0 32rpx;
						.goods-item:nth-child(2n){
							margin-right: 0;
						}
						.goods-item{
							width: 39%;
							padding: 40rpx 32rpx;
							margin-right: 20rpx;
							margin-bottom: 20rpx;
							background-color: #fff;
							border-radius: 24rpx;
							box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
							.image-wrap{
								width: 100%;
								.image{
									width: 100%;
									height: 100%;
									border-radius: 12px;
								}
							}
							.info-wrap{
								flex: 1;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								.item-title{
									margin-top: 24rpx;
									line-height: 44rpx;
									font-size: 32rpx;
									white-space: pre-wrap;
									font-weight: bold;
									color: #1D1E2C;
								}
								.item-subtitle{
									display: flex;
									flex-direction: column;
									.item-time{
										margin-top: 8rpx;
										line-height: 40rpx;
										font-size: 26rpx;
										color: #69707F;
									}
									.item-foot{
										margin-top: 24rpx;
										display: flex;
										justify-content: space-between;
										align-items: center;
										.item-address{
											display: flex;
											align-items: center;
											.icon{
												margin-right: 8rpx;
												font-size: 26rpx;
												color: #69707F;
											}
											.text{
												font-size: 26rpx;
												color: #69707F;
											}
										}
										.item-view{
											display: flex;
											align-items: center;
											.icon{
												margin-right: 8rpx;
												font-size: 26rpx;
												color: #69707F;
											}
											.text{
												font-size: 26rpx;
												color: #69707F;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		.plate-common{
			.title-wrap{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					flex: 1;
					display: flex;
					align-items: center;
					padding: 40rpx 32rpx;
					.image-wrap{
						position: relative;
						margin-right: 24rpx;
						width: 40rpx;
						height: 40rpx;
						.image{
							position: absolute;
							bottom: 0;
							left: 0;
							width: 40rpx;
							height: 40rpx;
						}
					}
					.title{
						display: flex;
						align-items: center;
						margin-right: 24rpx;
						.text{
							line-height: 50rpx;
							font-size: 36rpx;
							font-weight: bold;
							color: #1D1E2C;
						}
					}
					.subtitle{
						.text{
							margin-right: 10rpx;
							font-size: 26rpx;
							color: #69707F;
						}
					}
				}
				.right{
					flex-shrink: 0;
					padding: 40rpx 32rpx;
					.more{
						display: flex;
						align-items: center;
						.icon,.text{
							margin-left: 12rpx;
							font-size: 24rpx;
							color: #69707F;
						}
					}
				}
			}
			.item-list_no{
				.no-data{
					flex: 1;
					padding: 0 32rpx 32rpx;
					.text{
						padding: 0 32rpx;
						font-size: 28rpx;
						color: #666;
					}
				}
			}
		}
	}
	
}
</style>
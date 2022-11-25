<template>
	<view class="chat-detail-page page-common">
		<!-- 顶部 -->
		<view class="nav-wrap">
			<view class="nav" :style="{ height: navBarHeight + 'px'}" :class="{'showBgc' : isShowBgc}">
				<view class="nav-top" :style="{ paddingTop: navBarTop + 'px' }"></view>
				<view class="nav-mian">
					<view class="nav-main-left">
						<view class="back-btn" @click="back">
							<text class="icon iconfont icon-pager-left"></text>
						</view>
						<view class="title">
							<text class="user-nickName">{{title || ""}}</text>
							<!-- <text class="user-name">{{title || ""}}</text> -->
						</view>
					</view>
				</view>
			</view>
			
			<view :style="{ paddingTop: navBarHeight + 'px' }"></view>
		</view>
		
		<view class="chat-detail-container">
			<view class="top">
				<view class="left">
					<view class="image-wrap">
						<image class="image" src="https://img0.baidu.com/it/u=561734853,2461096286&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669309200&t=6d8e2b28aac1b0c1952e51097b328840" mode="aspectFill"></image>
					</view>
				</view>
				<view class="right">
					<view class="title">
						<text class="price">￥20</text>
						<text class="label"></text>
					</view>
					<view class="subtitle">
						<view class="s_left">
							<text class="text">含运费0.00元</text>
							<text class="text">交易前聊一聊</text>
						</view>
						<view class="s_right">
							<view class="btn-wrap">
								<text class="btn">立即购买</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bottom">
				<scroll-view>
					<view class="" style="padding-top: 60rpx;"></view>
					<view class="chat-list">
						<view class="chat-item" v-for="(item,index) in chatList" :key="index">
							<view class="time" v-if="item.time">17:44</view>
							<view class="left" v-if="item.receiver">
								<view class="image-wrap">
									<image class="image" src="" mode="aspectFill"></image>
								</view>
								<view class="content">
									aa
								</view>
							</view>
							<view class="right" v-if="item.sender">
								<view class="content">
									bb
								</view>
								<view class="image-wrap">
									<image class="image" src="" mode="aspectFill"></image>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="foot">
			<view class="foot-wrap">
				<view class="item">
					<text class="icon iconfont icon-add"></text>
				</view>
				<view class="input-wrap">
					<view class="input">
						<u--textarea
							v-model="chatValue"
							placeholder="想跟他说点什么..."
							fixed="true"
							autoHeight
							border="none"
						></u--textarea>
					</view>
				</view>
				<view class="item">
					
				</view>
				<view class="item" v-if="!chatValue.length">
					<text class="icon iconfont icon-add"></text>
				</view>
				<view class="btn-wrap" v-else>
					<view class="btn" @click="send">
						发送
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return{
			//顶部
			navBarHeight:this.$CustomBar,	//顶部height
			navBarTop:this.$StatusBar,		//顶部top
			title:'用户名',					//顶部标题
			isShowBgc:false,				//是否固定顶部
			
			id:'',
			
			//foot
			chatValue:'',
		}
	},
	onLoad(option) {
		console.log(option);
		this.id = option.id
	},
	methods:{
		back(){
			uni.navigateBack()
		}
	}
}
</script>

<style lang="scss" scoped>
.chat-detail-page{
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: #f5f5f5;
	.nav-wrap{
		position: relative;
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
				justify-content: space-between;
				align-items: center;
				padding: 0 32rpx;
				.nav-main-left{
					display: flex;
					align-items: center;
					.back-btn{
						margin-right: 24rpx;
						.icon{
							
						}
					}
					.title{
						display: flex;
						flex-direction: column;
						font-size: 32rpx;
						font-weight: bold;
						color: $title-color;
					}
				}
			}
		}
	}
	
	.chat-detail-container{
		flex: 1;
		display: flex;
		flex-direction: column;
		.top{
			display: flex;
			padding: 20rpx 32rpx;
			border-bottom: 1px solid #eaeaea;
			.left{
				flex-shrink: 0;
				margin-right: 20rpx;
				.image-wrap{
					width: 118rpx;
					height: 118rpx;
					border-radius: 24rpx;
					overflow: hidden;
					.image{
						width: 100%;
						height: 100%;
					}
				}
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: stretch;
				justify-content: space-between;
				.title{
					font-size: 28rpx;
					color: $title-color;
				}
				.subtitle{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.s_left{
						flex: 1;
						display: flex;
						flex-direction: column;
						.text{
							margin-top: 4rpx;
							font-size: 20rpx;
							color: $subtitle-color;
						}
					}
					.s_right{
						flex-shrink: 0;
						margin-left: 32rpx;
						.btn-wrap{
							padding: 10rpx 24rpx;
							background-color: #FF9200;
							border-radius: 48rpx;
							.btn{
								font-size: 28rpx;
								color: #fff;
							}
						}
					}
				}
			}
		}
	
		.bottom{
			flex: 1;
			.time{
				text-align: center;
				font-size: 24rpx;
				color: $subtitle-color;
			}
		}
	}

	.foot{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		z-index: 1000;
		.foot-wrap{
			width: 100%;
			display: flex;
			align-items: center;
			padding:  32rpx;
			box-sizing: border-box;
			.item{
				flex-shrink: 0;
			}
			.input-wrap{
				position: relative;
				flex: 1;
				height: 68rpx;
				margin: 0 32rpx;
				border-radius: 24rpx;
				background-color: #fff;
				.input{
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
				}
				/deep/.u-textarea{
					padding: 0 24rpx;
					border-radius: 24rpx;
				}
			}
			.btn-wrap{
				padding: 10rpx 24rpx;
				background-color: yellow;
				border-radius: 48rpx;
				.btn{
					font-size: 28rpx;
					font-weight: bold;
					color: $title-color;
				}
			}
		}
	}
	
}
</style>
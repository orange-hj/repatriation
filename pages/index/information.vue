<template>
	<view class="information-page page-common">
		<!-- 顶部 -->
		<view class="nav-wrap">
			<view class="nav" :style="{ height: navBarHeight + 'px'}" :class="{'showBgc' : isShowBgc}">
				<view class="nav-top" :style="{ paddingTop: navBarTop + 'px' }"></view>
				<view class="nav-mian">
					<view class="nav-main-left">
						<view class="title">
							{{title? title : ""}}
						</view>
						<view class="subtitle">
							（10）
						</view>
						<view class="btn-wrap">
							<view class="btn">
								清除未读
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view :style="{ paddingTop: navBarHeight + 'px' }"></view>
		</view>
		
		<view class="information-page-container">
			<view class="plate1">
				<view class="search-plate">
					<view class="search-wrap">
						<u-search
							v-model="searchValue"
							placeholder="我想搜索点什么" 
							:showAction="false"
							:clearabled="false"
							searchIconColor="#999"
							searchIconSize="42rpx"
							searchIcon="search"
							maxlength="-1"
							height="100%"
							@search="search"
						></u-search>
					</view>
				</view>
				<infoPlate :data="data" border="true"></infoPlate>
			</view>
			<view class="plate2">
				<pageList :list="list" content="还没有人找你聊天哦~"></pageList>
			</view>
			
		</view>
	</view>
</template>

<script>
import { infoPlate } from '@/components/common/info-plate.vue'
import { pageList } from '@/components/common/page-list.vue'

import { chatList } from '@/api/chat/chat.js'
export default{
	components:{ infoPlate,pageList },
	data(){
		return{
			//顶部
			navBarHeight:this.$CustomBar,	//顶部height
			navBarTop:this.$StatusBar,		//顶部top
			title:'消息',					//顶部标题
			isShowBgc:false,				//是否固定顶部
			searchValue:'',
			
			
			data:[],
			list:[]
		}
	},
	onShow() {
		this.data = [{
			image:"https://img2.baidu.com/it/u=1003272215,1878948666&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1669309200&t=21855b3cfd22eec070d9d16030fc4bfb",
			title:"title",
			subtitle:"subtitle",
			endTime:"16-00"
		}]
		this.fetchData()
	},
	methods:{
		fetchData(){
			chatList().then(res =>{
				console.log(res);
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.information-page{
	position: relative;
	display: flex;
	flex-direction: column;
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
					.title{
						font-size: 36rpx;
						font-weight: bold;
						color: $title-color;
					}
					.subtitle{
						font-size: 24rpx;
						color: $subtitle-color;
					}
					.btn-wrap{
						padding: 8rpx 24rpx;
						background-color: rgba(0, 0, 0, 0.05);
						border-radius: 36rpx;
						.btn{
							font-size: 22rpx;
							color: $subtitle-color;
						}
					}
				}
			}
		}
	}
	
	.information-page-container{
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: #f5f5f5;
		.plate1{
			display: flex;
			flex-direction: column;
			background-color: #fff;
			.search-plate{
				padding: 24rpx 32rpx 0;
				height: 68rpx;
				.search-wrap{
					display: flex;
					width: 100%;
					height: 100%;
					border-radius: 40rpx;
					background-color: #F4F4F4;
				}
			}
		}
		
		.plate2{
			margin-top: 24rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			background-color: #fff;
		}
	}
}
</style>
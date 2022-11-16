<template>
	<view class="home-page">
		<!-- <view class="nav-top" :style="{ paddingTop: $StatusBar + 'px' }"></view> -->
		<view class="home-page-container">
			home
			
			
			<view class="goods-wrap">
				
				<view class="goods" v-for="(item,index) in goodsList" :key="index">
					<view class="image-wrap">
						<image :src="item.list[0].url" mode="aspectFill"></image>
					</view>
					<view class="intro">
						描述  
						
						{{item.intro}}
					</view>
					<view class="price">
						价格  {{item.price}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { homeGoodsList } from '@/api/goods/goods.js'
export default{
	data(){
		return{
			goodsList:[]
		}
	},
	onLoad() {

	},
	onShow() {
		this.fetchData()
	},
	methods:{
		fetchData(){
			homeGoodsList({limit:5,page:1}).then(res =>{
				console.log(res);
				this.goodsList = res.data
			})
		}
	}
}
</script>

<style>
</style>
<template>
	<view class="banner-plate plate-common">
		<swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500" indicator-color="#fff" indicator-active-color="#4FAAF7">
			<swiper-item v-for="(item, index) in list" :key="index" @click="toDetail(item)">
				<image :src="item.imagePath" mode="aspectFill" class="banner-img"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default{
	props:{
		list:{
			type:Array,
			default:[]
		}
	},
	data(){
		return{
		}
	},
	methods:{ 
		toDetail(item){
			uni.navigateTo({
				url: item.path
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.plate-common{
	padding: 0 32rpx;
	box-sizing: border-box;
}
.banner-plate{
	.screen-swiper{
		height: 252rpx;
	}
	.banner-img{
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 12px;
	}
}
</style>
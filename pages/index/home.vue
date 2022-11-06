<template>
	<view class="home-page">
		<!-- <view class="nav-top" :style="{ paddingTop: $StatusBar + 'px' }"></view> -->
		<view class="home-page-container">
			home
		</view>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	onLoad() {
		uni.hideTabBar()
	},
	methods:{
		
	}
}
</script>

<style>
</style>
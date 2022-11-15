<template>
	<view class="nav-bar" v-if="navType == 1">
		<view class="page-back" :style="{ height: navBarHeight + 'px',backgroundColor: topOpacity}">
			<view class="nav-top" :style="{ paddingTop: navBarTop + 'px' }">
				<view class="back-btn" @click="back">
					<text class="iconfont icon-pager-left"></text>
				</view>
				<view class="top-title" :style="{ opacity: topTitleOpacity}">
					{{title}}
				</view>
			</view>
		</view>
	</view>
	<view class="nav-bar" v-else-if="navType == 0">
		<view class="page-back" :style="{ height: navBarHeight + 'px',backgroundColor: topOpacity}">
			<view class="nav-top" :style="{ paddingTop: navBarTop + 'px' }">
				<view class="back-btn" @click="back">
					<text class="iconfont icon-pager-left"></text>
				</view>
				<view class="top-title" :style="{ opacity: topTitleOpacity}">
					{{title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	props:{
		navType:{	//	0 固定导航栏		1 渐变透明度	
			type:Number,
			default:1
		},
		title:{
			type:String,
			default:''
		},
		color:{
			type:String,
			default:'#fff'
		},
		bgc:{
			type:String,
			default:'#fff'
		}
	},
	data(){
		return{
			navBarHeight:this.$CustomBar,
			navBarTop:this.$StatusBar,
			
			topOpacity:"rgba(255, 255, 255, 0)",	//顶部透明度
			topTitleOpacity:0						//顶部标题透明度
		}
	},
	onPageScroll(e) {
		let op = parseFloat(e.scrollTop*0.01)
		if(e < 5){
			op = 0
		}
		this.topOpacity = `rgba(255, 255, 255, ${op})`
		this.topTitleOpacity = op
	},
	created(){
		
	},
	methods:{
		back(){
			uni.navigateBack(-1)
		}
	}
	
}
</script>

<style lang="scss" scoped>
.page-back{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	padding-left: 32rpx;
	background-color: rgba(255, 255, 255, 0);
	z-index: 10000;
	.nav-top{
		display: flex;
		align-items: center;
	}
	.back-btn{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 68rpx;
		height: 68rpx;
		color: #FF6600;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		.iconfont{
			font-size: 36rpx;
			color: #fff;
		}
	}
	.top-title{
		margin-left: 24rpx;
		color: #333;
		opacity: 0;
	}
}
</style>
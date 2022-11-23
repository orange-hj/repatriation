<template>
	<view class="item-list" v-if="data && data.length != 0" :style="{ 'background-color': bgColor}">
		<slot></slot>
		<view class="no-more" :style="{'padding-bottom' : paddingBottom}">
			- 到底了 -
		</view>
	</view>
	<view class="plate-nodata" :style="{'padding-top': no_paddingBottom}" v-else>
		<view class="image-wrap">
			<image class="image" src="http://gx.scjfu.com/static/icon/box.png" mode="widthFix"></image>
			<view class="none-info">
				页面出错啦~
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		data:{
			type:Object,
			default:{}
		},
		bgColor:{
			type:String,
			default:''
		},
		paddingBottom:{
			type:String,
			default:'66rpx'
		},
		no_paddingBottom:{
			type:String,
			default:'160rpx'
		}
	}
}
</script>

<style lang="scss" scoped>
.item-list{
	.no-more{
		font-size: 24rpx;
		color: #999;
		text-align: center;
	}
}
.plate-nodata{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	.image-wrap{
		position: relative;
		width: 100%;
		padding-bottom: 40rpx;
		.image{
			width: 100%;
			height: 100%;
		}
		.none-info{
			position: absolute;
			bottom: 40rpx;
			left: 50%;
			transform: translate(-50%,0);
			line-height: 17px;
			color: #646D79;
			font-size: 24rpx;
		}
	}
}
</style>
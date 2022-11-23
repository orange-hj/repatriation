<template>
	<view class="list-wrap">
		<view class="list" v-if="list.length != 0">
			<slot></slot>
		</view>
		<view class="no-data" v-else>
			{{noData}}
		</view>
	</view>
</template>

<script>
export default {
	props:{
		list:{
			type:Array,
			default:[]
		},
		noData:{
			type:String,
			default:"暂无数据"
		}
	}
}
</script>

<style lang="scss" scoped>
.no-data{
	padding: 0 44rpx;
	padding-bottom: 44rpx;
	font-size: 28rpx;
	color: #999;
}
</style>
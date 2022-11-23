<template>
	<view class="info-list">
		<view class="info-palte" v-for="(item,index) in data" :key="index" :class="{'border' : border}">
			<view class="left">
				<view class="image-wrap">
					<image class="image" :src="item.image" mode="aspectFill"></image>
				</view>
			</view>
			<view class="center">
				<view class="title">
					{{item.title || 'name'}}
				</view>
				<view class="subtitle">
					{{item.subtitle || "12131"}}
				</view>
				<view class="time">
					{{item.endTime || '11-23'}}
				</view>
			</view>
			<view class="right">
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	props:{
		data:{
			type:Array,
			default:[]
		},
		border:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			
		}
	}
}
</script>

<style lang="scss" scoped>
.info-list{
	.border{
		border-bottom: 1px solid #f5f5f5;
	}
	.border:last-child{
		border-bottom: 0;
	}
	.info-palte{
		display: flex;
		align-items: flex-start;
		margin: 0 32rpx;
		padding: 32rpx 0;
		.left{
			flex-shrink: 0;
			margin-right: 24rpx;
			.image-wrap{
				width: 110rpx;
				height: 110rpx;
				border-radius: 50%;
				overflow: hidden;
				.image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.center{
			flex: 1;
			display: flex;
			flex-direction: column;
			.title{
				font-size: 32rpx;
				color: $title-color;
			}
			.subtitle{
				font-size: 24rpx;
				color: $subtitle-color;
			}
			.time{
				font-size: 20rpx;
				color: $subtitle-color;
			}
		}
		.right{
			flex-shrink: 0;
		}
	}
}
</style>
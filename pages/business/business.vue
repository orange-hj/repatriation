<template>
	<view class="mine-page page-common">
		<view class="mine-page-container">
			<userInfo :isLogin="isLogin" :baseInfo="baseInfo"></userInfo>

			<view class="main">
				<view class="sell" @click="toSell">
					我要出售
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import userInfo from "@/pages/mine/components/userInfo.vue"
import { getUserInfo } from "@/api/user/user.js"
export default {
	components: { userInfo },
	data() {
		return {
			isLogin:uni.getStorageSync('isLogin'),
			baseInfo:null,
		};
	},
	onShow() {
		this.fetchData()
	},
	methods: {
		fetchData(){
			getUserInfo().then(res =>{
				console.log(res);
				this.baseInfo = res.data
			})
		},
		toSell(){
			console.log('出售');
			uni.navigateTo({
				url:'/pages/business/release'
			})
		}
	}
};
</script>
<style lang="scss" scoped>
	.mine-page {
		background-color: #fff;

		.mine-page-container {
			display: flex;
			flex-direction: column;
			background-color: #fff;
			height: 100%;

			.main {
				.sell{
					padding: 32rpx;
					text-align: center;
					font-size: 32rpx;
					color: #000;
					border: 1px solid #f1f1f1;
				}
			}
		}
	}
</style>

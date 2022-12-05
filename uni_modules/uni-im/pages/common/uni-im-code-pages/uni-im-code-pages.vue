<template>
	<view class="code-view">
		<uni-im-code-view :code="code" :showFullBtn="false"></uni-im-code-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code:""
			}
		},
		onLoad({
			code
		}) {
			this.code = decodeURIComponent(code)
		}
	}
</script>

<style lang="scss">
	.text-box,
	.code-view {
		background-color: #fffae5 !important;
		flex: 1;
		width: 750rpx;
		height: 100vh;
	}
</style>

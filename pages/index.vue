<template>
	<view>
		<view class="status"></view>
		<view class="In-title">
			归<text class="In-title-off">风鸣</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.status{
		height: var(--status-ber-height);
	}
	.In-title {
		background-color: #f7f7f7;
		height: 130rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 48rpx;
	}
	.In-title-off{
		color:#949494 ;
	}
</style>

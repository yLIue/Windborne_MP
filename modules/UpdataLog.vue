<template>
	<view class="updata_log">
		<view class="updata_log-title">{{data.ver}} 更新日志</view>
		<view class="updata_log-text">
			更新时间 {{data.createdDate}}
			<view v-for="(item,index) in data.updata" :key="'updata' + index">
				# {{item}}
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props:['data'],
		data() {
			return {}
		}
	}
</script>

<style>
	.updata_log-title{
		display: flex;
		justify-content: center;
		font-size: 40rpx;
		color: #343434;
		padding-top: 30rpx;
	}
	.updata_log{
		width: 705rpx;
		margin-left: 25rpx;
		margin-top: 25rpx;
		background-color: #ffffff;
		
		border-radius: 30rpx;
		border: 1rpx solid #e5e5e5;
	}
	.updata_log-text{
		margin-left: 45rpx;
		font-size: 30rpx;
		color: #6d6d6d;
		margin-top: 20rpx;
		line-height: 1.7;
		padding-right: 20rpx;
		margin-bottom: 50rpx;
	}
</style>

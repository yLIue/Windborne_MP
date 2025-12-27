<template>
	  <view class="info_develop">
	    <view class="info_develop-item" v-for="(item,index) in data" :key="'infoDevelop' + item">
	      <text>{{item.title}}</text>
	      <text class="info_develop-text">{{item.value}}</text>
	    </view>
	  </view>
</template>

<script>
	export default {
		props:["data"],
	}
</script>

<style>
	.info_develop {
		margin: 30rpx 32rpx;
		border-radius: 20rpx;
		overflow: hidden;
		background-color: #fff;
		border: 1rpx solid #e5e5e5;
	}
	.info_develop-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx 32rpx;
		position: relative;
	}
	.info_develop-item:not(:last-child)::after{
		content: '';
		position: absolute;
		left: 32rpx;
		bottom: 0;
		right: 0;
		height: 1rpx;
		background-color: #E5E5EA;
	}
	.info_develop-text{
		color: #6d6d6d;
	}
</style>

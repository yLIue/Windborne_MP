<template>
	<view class="title" :class="color ? 'title--ffff':'title--f7f7'">
		<view class="status"></view>
		<view class="title_box">
			<view class="title_ico" @click="back">&#xe60f;</view>
			<view class="title_text">{{title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["title","color"],
		data() {
			return {
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.status{
		height: var(--status-ber-height);
	}
	.title_text{
		flex-grow: 1;
		//居中
		display: flex;
		justify-content: center;
		position: relative;
		right: 40rpx;
		z-index: 99;
	}
	.title_box{
		height: 110rpx;
		font-size: 42rpx;
		color: #343434;
		// 居中
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.title_ico{
		font-family: 'ICO';
		font-size: 48rpx;
		padding-left: 40rpx;
		z-index: 100;
	}
	.title{
		position: sticky;
		top: 0;	
		z-index: 100;
	}
	.title--ffff{
		background-color:#ffffff;
	}
	.title--f7f7{
		background-color:#f7f7f7;
	}
</style>

<template>
	<view class="rewind" @touchstart="ShowDate()" @touchend="ShowDate()" hover-stay-time="50">
		<view class="rewind_text">{{rewind.text}}</view>
		<view class="rewind_text">
			<view v-if="showDate">| {{rewind.date}} |</view>
			<view v-else>| - |</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rewind:{
					'text':'寻风而落的花，在地上生了芽',
					'date':'23.10.3-17:27'
				},
				showDate:false
			}
		},
		methods: {
			ShowDate(){
				this.showDate = !this.showDate
			}
		}
	}
</script>

<style lang="scss">
	.rewind{
		font-size: 24rpx;
		height: 110rpx;
		margin-bottom: 20rpx;
		// 居中
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.rewind_text{
		color: #999999;
		margin-bottom: 5rpx;
		// 居中
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

<template>
	<view class="card">
		<view class="card_box" hover-class="card_box--hover" hover-stay-time="50" @click="Jump(card.jumpClass,card.jump)">
			<view class="card_title">{{card.class}}</view>
			<view class="card_info">
				<image class="card_ico" :src="'/static/' + card.icoClass + '/' + card.ico + card.icoType"></image>
				<view class="card_text" v-if="card.type == 'card'">{{card.title}}</view>
				<view class="card_text" v-if="card.type == 'showCount'">
					<text class="card_count">{{card.count}}</text>
					<text class="card_countType">{{card.countType}}</text>
				</view>
			</view>
			<view class="card_describe">{{card.description}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["card"],
		data() {
			return {
				
			}
		},
		methods: {
			Jump(_jumpClass,_jump){
				uni.navigateTo({
					url:'/pages/' + _jumpClass + '/' + _jump
				})
			}
		}
	}
</script>

<style>
	.card{
		display: flex;
		justify-content: center;
		margin-bottom: 30rpx;
	}
	.card_box{
		background-color: #ffffff;
		height: 300rpx;
		border-radius: 30rpx;
		width: 700rpx;
	}
	.card_box--hover{
		background-color: #ebebeb;
	}
	.card_title{
		/* margin在模块中会作用于父元素 */
		/* margin: 30rpx; */
		font-size: 28rpx;
		padding: 30rpx;
		color: #949aa8;
	}
	.card_describe{
		font-size: 24rpx;
		color: #999999;
		margin-left: 140rpx;
		margin-top: 5rpx;
	}
	.card_ico{
		height: 80rpx;
		width: 80rpx;
		margin-top: 25rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}
	.card_info{
		display: flex;
		color: #343434;
	}
	.card_text{
		font-size: 35rpx;
		margin-top: 12rpx;
		margin-top: 30rpx;
	}
	.card_count{
		font-size: 60rpx;
	}
	.card_countType{
		font-size: 28rpx;
	}
</style>

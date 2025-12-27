<template>
	<view>
		<view class="status"></view>
		<view class="title">
			归<text class="title_off">风鸣</text>
		</view>
		
		<Rewind></Rewind>
		
		<view v-for="(card,cardKey) in cards" :key="'card' + cardKey">
			<Card :card="card"></Card>
		</view>
		
	</view>
</template>

<script>
	import Data from '../config/config.json'
	import Card from '../modules/Card'
	import Rewind from '../modules/Rewind.vue'
	export default {
		data() {
			return {
				cards:[]
			}
		},
		onLoad() {
			this.cards = Data.index
		},
		methods: {
		},
		components:{
			Card,Rewind
		}
	}
</script>

<style>
	.title {
		background-color: #f7f7f7;
		height: 130rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 48rpx;
	}
	.title_off{
		color:#949494 ;
	}
</style>

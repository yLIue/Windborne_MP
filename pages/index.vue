<template>
	<view>
		<view class="status"></view>
		<view class="title">
			归<text class="title_off">风鸣</text>
		</view>
		
		<view v-for="(card,cardKey) in cards" :key="'card' + cardKey">
			<Card :card="card"></Card>
		</view>
		
	</view>
</template>

<script>
	import Data from '../config/config.json'
	import Card from '../modules/Card'
	import Markdown from '../js/Markdown'
	// import Note from '../note/CiscoNote.md'
	export default {
		data() {
			return {
				cards:[]
			}
		},
		onLoad() {
			this.cards = Data.index
			Markdown.read('note/CiscoNote.md')
		},
		methods: {
		},
		components:{
			Card
		}
	}
</script>

<style>
	.status{
		height: var(--status-ber-height);
	}
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

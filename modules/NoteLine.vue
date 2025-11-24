<template>
	<view>
		<view v-for="(line,lineKey) in lines" :key="'line' + lineKey">
			<view v-for="(item,itemKey) in line.values" :key="'item' + itemKey" class="item">
				{{item.values}}
			</view>
			<!-- {{line.values}} -->
		</view>
	</view>
</template>

<script>
	import Markdown from '../js/Markdown';
	export default {
		data() {
			return {
				lines:[]
			}
		},
		onLoad() {
			Markdown.read('note/CiscoNote.md',(note) => {
				this.lines = note
			})
			
			// this.lines = note
		},
		methods: {
		},
		components:{
		}
	}
</script>

<style>
	.item{
		margin-bottom: 50rpx;
	}
</style>

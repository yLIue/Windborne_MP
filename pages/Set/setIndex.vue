<template>
	<view>
		<Title title="设置"></Title>
		<view class="Set-list-box" v-for="(v,setlistkey) in list" :key="setlistkey" @click="To(v.to)"
		hover-class="on" hover-stay-time="50">
			<view>
				<view class="Set-list-name">{{v.name}}</view>
				<view class="Set-list-text">{{v.text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Title from "../../modules/Title.vue"
	export default {
		data() {
			return {
				list:[
					{
						name:'关于小程序',
						text:"版本号、更新日志",
						to:'About'
					},
					{
						name:'鸣谢名单',
						text:"",
						to:'Love'
					}
				]
			}
		},
		methods: {
			
		},
		components:{
			Title
		}
	}
</script>

<style lang="scss">
	.Set-list-box{
		height: 110rpx;
		padding-left: 50rpx;
		margin-bottom: 10rpx;
		display: flex;
		align-items: center;
	}
	.Set-list-name{
		font-size: 35rpx;
		color: #343434;
	}
	.Set-list-text{
		font-size: 25rpx;
		color: #606060;
	}
	.on{
		background-color: #ebebeb;
	}
</style>

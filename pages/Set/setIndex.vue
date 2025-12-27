<template>
	<view>
		<Title title="设置"></Title>
		
		<view v-for="(itemList,indexList) in cards" @click="Jump(itemList.jumpClass,itemList.jump)"
		:key="'list'+indexList" class="list" hover-class="list--hover" hover-stay-time="50">
			<view class="list_title">{{itemList.title}}</view>
			<view class="list_description">{{itemList.description}}</view>
		</view>
	</view>
</template>

<script>
	import Title from "../../modules/Title.vue"
	export default {
		data() {
			return {
				cards:[
					{
						title:'关于小程序',
						description:"版本号、更新日志",
						jumpClass:'SetPages',
						jump:'about'
					},
					{
						title:'项目贡献',
						description:"",
						jumpClass:'SetPages',
						jump:'contributors'
					}
				]
			}
		},
		methods: {
			Jump(_jumpClass,_jump){
				uni.navigateTo({
					url:'/pages/Set/'+_jumpClass+'/'+_jump
				})
			}
		},
		components:{
			Title
		}
	}
</script>

<style lang="scss">
	.list{
		height: 130rpx;
		padding-left: 50rpx;
		margin-bottom: 10rpx;
		//上下对齐
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.list_title{
		font-size: 35rpx;
		color: #343434;
	}
	.list_description{
		font-size: 25rpx;
		color: #606060;
	}
	.list--hover{
		background-color: #ebebeb;
	}
</style>

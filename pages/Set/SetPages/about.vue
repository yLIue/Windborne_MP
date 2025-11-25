<template>
	<view>
		<Title title="关于小程序" color=true ></Title>
		
		<view class="cards">
			<view class="card-left">
				<image src="/static/loge/Windborneloge.png" class="loge"></image>
				<view>归风鸣版本</view>
				<view class="card-left_ver"><text>
					{{projectInfo['type']}} {{projectInfo['ver']}}\n
					{{projectInfo['createdDate']}}
				</text></view>
			</view>
			
			<view class="card-right">
				<view class="card-right-top">
					<view class="card-right-top_title--Cn">归风鸣</view>
					<view class="card-right-top_title--En">afSurvival</view>
				</view>
				
				<view class="card-right-bottom">
					
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import Title from '../../../modules/Title.vue';
	import Config from '../../../config/config.json'
	export default{
		data(){
			return {
				projectInfo:{}
			}
		},
		components:{
			Title
		},
		onLoad() {
			this.projectInfo = Config['projectInfo']
		}
	}
</script>

<style lang="scss">
	body{
		background-color: #ffff;
	}
	.cards{
		// background-color: #de9aef;
		display: flex;
	}
	.card-left{
		//基本设置
		width: 298rpx;
		height: 500rpx;
		border-radius: 30rpx;
		background-color: #f7f7f7;
		
		margin-left: 25rpx;
		padding-left:45rpx;
		
		//内部元素设置
		font-size: 35rpx;
		color: #343434;
	}
	.loge{
		width:120rpx;
		height:120rpx;
		margin-top: 120rpx;
		margin-bottom: 32rpx;
	}
	.card-left_ver{
		color: #6d6d6d;
		font-size: 28rpx;
		line-height: 37rpx;
	}
	.card-right-top{
		height: 200rpx;
		width: 295rpx;
		border-radius: 30rpx;
		background-color: #f7f7f7;
		
		padding-left:45rpx;
	}
	.card-right-top_title--Cn{
		font-size: 35rpx;
		color: #343434;
		padding-top: 52rpx;
	}
	.card-right-top_title--En{
		font-size: 28rpx;
		color: #6d6d6d;
		margin-top: 10rpx;
	}
	.card-right-bottom{
		height: 275rpx;
		border-radius: 30rpx;
		background-color: #f7f7f7;
		
		margin-top: 25rpx;
		padding-left:45rpx;
	}
	.card-right{
		margin-left: 25rpx;
	}
</style>

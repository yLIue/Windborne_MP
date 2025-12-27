<template>
  <view>
	  <Title title="项目贡献"></Title>
	  <view class="contributor-title">贡献者名单</view>
	  <view class="contributors">
		  <view v-for="(contributor,index) in contributors" class="contributor">
			  <view class="contributor-ico" :class="contributor.class">
			    <text class="contributor-ico_name">{{contributor.icoName}}</text>
			  </view>
			  
			  <view class="contributor-text">
			    <text>{{contributor.name}}</text>
			    <text class="contributor-work">{{contributor.work}}</text>
			  </view>
		  </view>
	  </view>
	  <view class="contributor-title">致谢</view>
	  <view class="love-title">小程序的开发离不开大家的建议和帮助，是你们让这个极其简陋的小程序越来越好，由衷感谢那些提出建议和bug的朋友。</view>
	  <view v-for="(name,index) in loves" :key="'love' + index" class="love-text">
		  {{name}}
	  </view>
  </view>
</template>

<script>
	import Title from '../../../modules/Title.vue';
	export default{
		data(){
			return{
				contributors:[
					{'name':'杨柳月 - yLIue','icoName':'YL','work':'核心开发','class':'ico_purple'},
					{'name':'栗子酱 - ChestnutSauce','icoName':'CS','work':'重构代码','class':'ico_pink'}
				],
				loves:['穆柒 - MUQI','栗子 - 秋喃']
			}
		},
		components:{
			Title
		}
	}
</script>

<style>
	.love-text{
		padding-left: 40rpx;
		font-size: 32rpx;
		padding-bottom: 15rpx;
		display: flex;
		justify-content: center;
	}
	.love-title{
		color: #999999;
		/* line-height: 2; */
		/* padding: 30rpx 40rpx 16rpx; */
		padding-left: 50rpx;
		padding-right: 50rpx;
		font-size: 30rpx;
		margin-bottom: 15rpx;
	}
	.contributor-work{
		font-size: 24rpx;
		color: #6d6d72;
		margin-top: 4rpx;
	}
	.contributor-text{
		display: flex;
		flex-direction: column;
		font-size: 32rpx;
	}
	.contributor-ico{
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 24rpx;
	}
	.contributor-ico_name{
		color: #FFF;
		font-size: 32rpx;
		font-weight: 600;
	}
	.contributor{
		display: flex;
		align-items: center;
		padding: 24rpx 32rpx;
	}
	.contributors{
		margin: 0 32rpx;
		background-color: #fff;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.contributor-title{
	  padding: 30rpx 40rpx 16rpx;
	  font-size: 26rpx;
	  color: #6d6d72;
	}
	.ico_purple { background: linear-gradient(135deg, #AF52DE, #5856D6); }
	.ico_pink { background: linear-gradient(135deg, #FF2D55, #FF375F); }
</style>
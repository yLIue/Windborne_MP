<template>
	<view>
		<Title title="关于小程序" color=true ></Title>
		
		<view class="cards">
			<view class="card-left" hover-class="--hover" hover-stay-time="50" @click="ClickLog()">
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
				
				<view class="card-right-bottom" @click="ClickGithub()" hover-class="--hover" hover-stay-time="50">
					<image class="ico_github" src="/static/loge/github-mark.png"/>
					<view>访问我们的github</view>
					<view>来加入我们</view>
					<view>{{githubText}}</view>
				</view>
				
			</view>
		</view>
		
		<UpdataLog :data="newUpdata"></UpdataLog>
		
		<Info :data="info"/>
	</view>
</template>

<script>
	import Title from '../../../modules/Title.vue';
	import Config from '../../../config/config.json'
	import UpdataLog from '../../../modules/UpdataLog.vue';
	import UpdataData from '../../../config/updata.json'
	import Info from '../../../modules/InfoDevelop.vue'
	export default{
		data(){
			return {
				projectInfo:{},
				githubUrl:"",
				githubText:'点此复制链接',
				newUpdata:'',
				info:[
					{'title':'开发框架','value':'UniApp + Vue3'},
					{'title':'算法参考','value':'《计算机操作系统》'}
				]
			}
		},
		components:{
			Title,UpdataLog,Info
		},
		onLoad() {
			this.projectInfo = Config['projectInfo']
			this.newUpdata = UpdataData[0]
		},
		methods:{
			ClickGithub(){
				uni.setClipboardData({
					data: 'https://github.com/yLIue/Windborne_MP',
					success: () => {
						this.githubText = '链接已复制'
					}
				});
			},
			ClickLog(){
				uni.navigateTo({
					url:'/pages/Set/SetPages/updataLog'
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.ico_github{
		position: absolute;
		width: 200rpx;
		height: 200rpx;
		opacity: 0.1;
		transform: rotate(-15deg);
		// right: 10rpx;
		// bottom: 10rpx;
	}
	page{
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
		//基本设置
		height: 275rpx;
		width: 340rpx;
		border-radius: 30rpx;
		background-color: #f7f7f7;
		
		margin-top: 25rpx;
		
		//内部元素设置
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		font-size: 32rpx;
		color: #343434;
		line-height: 1.7;
		
		box-sizing: border-box;
	}
	.card-right-bottom :last-child{
		font-size: 25rpx;
		color: #6d6d6d;
	}
	.card-right{
		margin-left: 25rpx;
	}
	.--hover{
		background-color:#ebebeb;
	}
</style>

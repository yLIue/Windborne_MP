<template>
	<view>
		<Title title="更新日志" color=true ></Title>
		
		<view v-for="(data,index) in updatas" :key="'updatas'+ index">
			<UpdataLog :data="data"></UpdataLog>
		</view>
		
		
	</view>
</template>

<script>
	import Title from '../../../modules/Title.vue';
	import UpdataLog from '../../../modules/UpdataLog.vue';
	import UpdataData from '../../../config/updata.json'
	export default{
		data(){
			return{
				updatas:[]
			}
		},
		components:{
			Title,UpdataLog
		},
		onLoad() {
			this.updatas = UpdataData
		}
	}
</script>

<style>
	       
</style>

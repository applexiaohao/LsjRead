<template>
	<div class="accountInformationContainer">
		<view v-for="(accountInformationItem) in accountInformationList" class="accountInformationItem" @click="onInformationClick" :key="accountInformationItem.title" v-bind:id="accountInformationItem.title">
			<view class="accountInfomation-value">{{accountInformationItem.value}}</view>
			<view class="accountInfomation-title">{{accountInformationItem.title}}</view>
		</view>
		<div class="split-line"></div>
		<div class="promote-activity">
			<view class="promote-img"></view>
			<view class="promote-content">推广可升级</view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				accountInformationList:[{
					title:"章节券",
					value:6
				},{
					title:"月票",
					value:12
				},{
					title:"剩余免费",
					value:16
				}]
			}
		},
		methods:{
			onInformationClick(e){
				uni.showToast({
					title:e.target.id,
					icon:null
				})
			}
		}
	}
</script>

<style>
	.accountInformationContainer{
		display: flex;
		flex-direction: row;
		height: 60px;
		background-color: #FFFFFF;
		padding-left: 25px;
		padding-right: 25px;
	}
	.accountInformationItem{
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		background-color: #FFFFFF;
		flex-shrink: 1;
		justify-content: center;
	}
	.accountInfomation-value{
		display: flex;
		font-size: 20px;
		font-weight: bold;
		align-self: center;
	}
	.accountInfomation-title{
		display: flex;
		font-size: 12px;
		font-weight: bold;
		align-self: center;
		color: #999999;
	}
	.split-line{
		display: flex;
		width: 1px;
		height: 44px;
		align-self: center;
		background-color: #999999;
		opacity: 0.5;
		margin-left: 25px;
	}
	.promote-activity{
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		margin-left: 25px;
		justify-content: center;
		background-color: #FFFFFF;
	}
	.promote-img{
		display: flex;
		align-self: center;
		width: 22px;
		height: 22px;
		background-color: #FFFF00;
	}
	.promote-content{
		display: flex;
		font-size: 12px;
		margin-top: 5px;
		align-self: center;
	}
</style>

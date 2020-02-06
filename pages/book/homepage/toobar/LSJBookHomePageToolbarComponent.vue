<template>
	<view class="homepage-toolbar-container">
		<view class="homepage-toolbar-line"></view>
		<view class="homepage-toolbar-save-button-container" @tap="onTapSave">
			<text class="homepage-toolbar-save-button">{{'加书架'}}</text>
		</view>
		<view class="homepage-toolbar-separate-line"></view>
		<view class="homepage-toolbar-goread-button-container" @tap="onTapGoRead">
			<text class="homepage-toolbar-goread-button">{{'开始阅读'}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			onTapGoRead(e){
				uni.navigateTo({
					url:`../read/LSJReadBookPage?bookId=${e.currentTarget.id}`
				});
			},
			onTapSave(e){
				uni.showToast({
					title:'放入书架',
					icon:'none'
				})
			},
		}
	}
</script>

<style>
	.homepage-toolbar-container {
		display: flex;
		position: absolute;
		bottom: 0px;
		height: 70px;
		left: 0px;
		right: 0px;
		flex-direction: row;
	}

	.homepage-toolbar-line {
		display: flex;
		position: absolute;
		top: 0px;
		height: 1px;
		left: 0px;
		right: 0px;
		background-color: #EDEDED;
	}

	.homepage-toolbar-save-button-container{
		display: flex;
		background-color: #FFFFFF;
		border-radius: 5px;
		height: 50px;
		margin-left: 20px;
		margin-right: 20px;
		align-self: center;
		flex-grow: 1;
		flex-direction: column;
		justify-content: center;
	}
	
	.homepage-toolbar-save-button {
		display: flex;
		align-self: center;
		font-size: 16px;
		font-weight: bold;
		color: #FF2742;
	}
	.homepage-toolbar-separate-line{
		display: flex;
		align-self: center;
		width: 1px;
		height: 24px;
		background-color: #F6F6F6;
	}
	.homepage-toolbar-goread-button-container{
		display: flex;
		background-color: #FF2742;
		border-radius: 5px;
		height: 50px;
		margin-left: 20px;
		margin-right: 20px;
		align-self: center;
		flex-grow: 1;
		flex-direction: column;
		justify-content: center;
	}
	.homepage-toolbar-goread-button {
		display: flex;
		align-self: center;
		font-size: 16px;
		font-weight: bold;
		color: #FFFFFF;
	}
	
</style>

<template>
	<view class="bookstoreSearchContainer">
		<view class="bookstoreSearchBarContainer" @tap="onClickSearch">
			<view class="bookstoreSearchBarImg"></view>
			<text class="bookstoreSearchInput">{{'搜小说名等等'}}</text>
		</view>
		<view class="bookstoreSearchHistoryButton" @tap="onClickHistory"></view>
	</view>
</template>

<script>
	export default{
		methods:{
			onClickSearch(e){
				uni.showToast({
					title:'去搜索，等待创建',
					icon:'none'
				})
			},
			onClickHistory(e){
				uni.showToast({
					title:'去历史记录，等待创建',
					icon:'none'
				})
			}
		}
	}
</script>

<style>
	.bookstoreSearchContainer{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 8px 20px 8px 20px;
		margin-bottom: 15px;
	}
	.bookstoreSearchBarContainer{
		display: flex;
		flex-direction: row;
		height: 40px;
		flex-grow: 1;
		border-radius: 20px;
		background-color: #F5F6F8;
	}
	.bookstoreSearchBarImg{
		align-self: center;
		width: 15px;
		height: 15px;
		margin-left: 20px;
		margin-right: 10px;
		background-color: #4CD964;
	}
	.bookstoreSearchInput{
		display: flex;
		align-self: center;
		font-size: 12px;
		color: #7F7F81;
		opacity: 0.5;
	}
	.bookstoreSearchHistoryButton{
		width: 27px;
		height: 27px;
		background-color: #007AFF;
		align-self: center;
		margin-left: 15px;
	}
</style>

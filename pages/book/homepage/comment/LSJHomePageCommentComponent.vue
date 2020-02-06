<template>
	<view class="homepage-comment-container" >
	<scroll-view class="homepage-comment-scroll" scroll-y="true">
		<view class="homepage-comment-head-section">
			<view class="homepage-comment-head-line"></view>
			<text class="homepage-comment-head-title">{{'书友评价'}}</text>
			<view style="flex-grow: 1;"></view>
			<text class="homepage-comment-head-write">{{'写书评'}}</text>
		</view>
		<view class="homepage-comment-section">
			<view class="homepage-comment-user-info">
				<view class="homepage-comment-user-info-img"></view>
				<text class="homepage-comment-user-info-name">{{'大老师'}}</text>
			</view>
			<text class="homepage-comment-content">{{'为什么突然大老师裤子掉了？都没有收到通知，一下子都没了..'}}</text>
		</view>
		<view class="homepage-comment-all">
			<text class="homepage-comment-all-title">{{'查看全部评论（126条）'}}</text>
		</view>
	</scroll-view>
	</view>
</template>

<script>
</script>

<style>
	.homepage-comment-container {
		display: flex;
		position: relative;
		flex-direction: column;
		flex-grow: 1;
		width: 100%;
	}
	.homepage-comment-scroll{
		display: flex;
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		height: 150px;
	}

	.homepage-comment-head-section {
		display: flex;
		position: relative;
		width: 100%;
		height: 50px;
		flex-direction: row;
		position: relative;
	}
	.homepage-comment-head-line{
		display: flex;
		width: 3px;
		border-radius: 1.5px;
		height: 16px;
		margin-left: 20px;
		align-self: center;
		background-color: #FF2742;
	}
	.homepage-comment-head-title{
		display: flex;
		font-size: 15px;
		color: #1D1D1D;
		font-weight: bold;
		margin-left: 8px;
		align-self: center;
	}
	.homepage-comment-head-write{
		display: flex;
		font-size: 15px;
		color: #1D1D1D;
		font-weight: bold;
		margin-right: 20px;
		align-self: center;
	}
	.homepage-comment-section{
		display: flex;
		width: 100%;
		height: 115px;
		flex-direction: column;
	}
	.homepage-comment-user-info{
		display: flex;
		flex-direction: row;
		margin-top: 20px;
		margin-left: 20px;
		margin-right: 20px;
	}
	.homepage-comment-user-info-img{
		display: flex;
		width: 30px;
		height: 30px;
		margin-right: 15px;
		background-color: #007AFF;
		align-self: center;
	}
	.homepage-comment-user-info-name{
		display: flex;
		color: #999999;
		font-size: 14px;
		align-self: center;
	}
	.homepage-comment-content{
		display: flex;
		margin-top: 10px;
		margin-left: 65px;
		margin-right: 20px;
		font-size: 14px;
	}
	.homepage-comment-all{
		display: flex;
		width: 100%;
		height: 50px;
		justify-content: center;
	}
	.homepage-comment-all-title{
		font-size: 14px;
		color: #1D1D1D;
		align-self: center;
	}
</style>

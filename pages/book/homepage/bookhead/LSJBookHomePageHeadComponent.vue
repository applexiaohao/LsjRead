<template>
	<view class="homepage-book-head-section">
		<view class="homepage-book-head-bg"></view>
		<view class="homepage-book-head-container">
			<view class="homepage-book-head-title-container">
				<view class="homepage-book-head-image"></view>
				<view class="homepage-book-head-title-section">
					<text class="homepage-book-head-title">{{'庆余年'}}</text>
					<text class="homepage-book-head-author">{{'大老师'}}</text>
					<text class="homepage-book-head-textcount">{{'223万字'}}</text>
				</view>
			</view>
		</view>
		<view class="homepage-book-head-summary-container">
			<text class="homepage-book-head-summary">{{'言情小说吧提供玄幻小说,武侠小说,原创小说,网游小说,都市小说,言情小说,青春小说,历史小说,军事小说,网游小说,科幻说,恐怖小说,首发小说,最新章节免费.军事小说,网游小说,科幻小说。'}}</text>
		</view>
		<view class="homepage-book-head-newest-section">
			<view class="homepage-book-head-newest-line"></view>
			<view class="homepage-book-head-newest-content">
				<text class="homepage-book-head-newest-title">{{'最新'}}</text>
				<text class="homepage-book-head-newest-value">{{'第1037章大结局（二）'}}</text>
				<view style="flex-grow: 1;"></view>
				<text class="homepage-book-head-newest-state">{{'已完结'}}</text>
			</view>
		</view>
		<view class="homepage-book-head-category-section">
			<view class="homepage-book-head-category-line"></view>
			<view class="homepage-book-head-category-content">
				<text class="homepage-book-head-category-title">{{'目录'}}</text>
				<text class="homepage-book-head-category-value">{{'共1037章'}}</text>
			</view>
		</view>
		<view style="height: 10px;width: 100%;background-color: #F1F1F3;"></view>
	</view>
</template>
<script>
</script>

<style>
	.homepage-book-head-section{
		display: flex;
		flex-direction: column;
	}
	.homepage-book-head-container {
		display: flex;
		background-color: #FFFFFF;
	}

	.homepage-book-head-bg {
		display: flex;
		position: absolute;
		top: 0px;
		left: 0px;
		height: 136px;
		right: 0px;
		background-color: #575E70;
	}

	.homepage-book-head-title-container {
		display: flex;
		position: relative;
		flex-direction: row;
	}

	.homepage-book-head-image {
		display: flex;
		position: relative;
		width: 90px;
		height: 113px;
		background-color: #4CD964;
		margin-left: 20px;
		margin-top: 56px;
		margin-right: 20px;
	}

	.homepage-book-head-title-section {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.homepage-book-head-title {
		display: flex;
		position: relative;
		font-size: 18px;
		font-weight: bold;
		color: #FFFFFF;
		margin-top: 56px;
	}

	.homepage-book-head-author {
		display: flex;
		position: relative;
		font-size: 12px;
		font-weight: bold;
		color: #FF2742;
		margin-top: 2px;
	}

	.homepage-book-head-textcount {
		display: flex;
		position: relative;
		font-size: 12px;
		font-weight: bold;
		color: #FFFFFF;
		margin-top: 2px;
	}
	.homepage-book-head-summary-container{
		display: flex;
		position: relative;
		padding: 0px 20px 0px 20px;
		background-color: #FFFFFF;
	}
	.homepage-book-head-summary {
		display: flex;
		font-size: 14px;
		margin-bottom: 20px;
		margin-top: 20px;
	}
	.homepage-book-head-newest-section{
		display: flex;
		position: relative;
		height: 50px;
		flex-direction: column;
		width: 100%;
		background-color: #FFFFFF;
	}
	.homepage-book-head-newest-line{
		display: flex;
		position: relative;
		height: 1px;
		width: 100%;
		background-color: #EDEDED;
	}
	.homepage-book-head-newest-content{
		display: flex;
		flex-direction: row;
		flex-grow: 1;
	}
	.homepage-book-head-newest-title{
		display: flex;
		font-size: 14px;
		align-self: center;
		margin-left: 20px;
	}
	.homepage-book-head-newest-value{
		display: flex;
		margin-left: 24px;
		font-size: 14px;
		color: #999999;
		align-self: center;
	}
	.homepage-book-head-newest-state{
		display: flex;
		align-self: center;
		font-size: 14px;
		color: #999999;
		margin-right: 30px;
	}
	
	.homepage-book-head-category-section{
		display: flex;
		position: relative;
		height: 50px;
		flex-direction: column;
		width: 100%;
		background-color: #FFFFFF;
	}
	.homepage-book-head-category-line{
		display: flex;
		position: relative;
		height: 1px;
		width: 100%;
		background-color: #EDEDED;
	}
	.homepage-book-head-category-content{
		display: flex;
		flex-direction: row;
		flex-grow: 1;
	}
	.homepage-book-head-category-title{
		display: flex;
		font-size: 14px;
		align-self: center;
		margin-left: 20px;
	}
	.homepage-book-head-category-value{
		display: flex;
		margin-left: 24px;
		font-size: 14px;
		color: #999999;
		align-self: center;
	}
</style>

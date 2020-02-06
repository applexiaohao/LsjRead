<template>
	<view class="bookStoreRecommendSectionContainer">
		<view class="bookStoreRecommendSectionMargin"></view>
		<view class="bookStoreRecommendSectionTitleContainer">
			<view class="bookStoreRecommendSectionHead"></view>
			<text class="bookStoreRecommendSectionTitle">{{'热门小说'}}</text>
		</view>
		<text class="bookStoreRecommendSectionTitleSummary">{{'大老师推荐'}}
		</text>
	</view>
</template>

<script>
</script>

<style>
	.bookStoreRecommendSectionContainer {
		display: flex;
		position: relative;
		flex-direction: row;
		width: 100%;
	}
	.bookStoreRecommendSectionMargin{
		height: 6px;
		background-color: #F5F6F8;
	}
	.bookStoreRecommendSectionTitleContainer {
		margin-top: 18px;
		display: flex;
		flex-direction: row;
	}

	.bookStoreRecommendSectionHead {
		width: 4px;
		height: 14px;
		background-color: #FF2742;
		border-radius: 2px;
		margin-left: 20px;
		margin-right: 10px;
		align-self: center;
	}
	.bookStoreRecommendSectionTitle{
		display: flex;
		font-size: 18px;
		font-weight: bold;
	}
	.bookStoreRecommendSectionTitleSummary{
		display: flex;
		font-size: 14px;
		color: #9B9B9B;
		margin-top: 20px;
		margin-left: 8px;
	}
</style>

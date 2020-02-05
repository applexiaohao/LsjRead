<template>
	<div class="recommendListContainer">
		<scroll-view class="recommendListScroller" scroll-x="true" show-scrollbar="false">
			<view v-for="(bookItem,index) in bookList" :class="{ 'recommendBookItemContainerMargin': index < (bookList.length - 1) ,'recommendBookItemContainer':true }"
			 :key="index">
				<view class="recommendBookContent">
					<view class="recommendBookImage"></view>
					<text class="recommendBookTitle">{{bookItem.title}}</text>
					<text class="recommendBookSummary">{{bookItem.summary}}</text>
				</view>
			</view>
		</scroll-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bookList: [{
					title: '庆余年',
					summary: '猫腻 著'
				}, {
					title: '庆余年',
					summary: '猫腻 著'
				}, {
					title: '庆余年',
					summary: '猫腻 著'
				}],
				currentIndex: 0
			}
		}
	}
</script>

<style>
	.recommendListContainer {
		display: flex;
		position: relative;
		flex-direction: column;
		height: 165px;
		padding: 0px 20px 0px 20px;
		margin-top: 15px;
	}

	.recommendListScroller {
		white-space: nowrap;
		width: 100%;
		overflow: hidden;
		height: 165px;
	}

	.recommendBookItemContainer {
		display: inline-block;
		width: 90px;
		height: 165px;
	}

	.recommendBookItemContainerMargin {
		margin-right: 24px;
	}
	.recommendBookContent{
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
	.recommendBookImage{
		display: flex;
		width: 90px;
		height: 113px;
		background-color: #007AFF;
	}
	.recommendBookTitle{
		display: flex;
		margin-top: 10px;
		font-size: 15px;
		font-weight: bold;
	}
	.recommendBookSummary{
		display: flex;
		margin-top: 5px;
		font-size: 12px;
		color: #999999;
	}
</style>

<template>
	<view class="mainScrollerContainer">
		<scroll-view class="mainScroller" scroll-x="true" show-scrollbar="false" @scroll="onScroll">
			<view v-for="(bookItem,index) in bookList" class="bookItemContainer" :key="index" v-bind:id="'v' + index">
				{{index+'做个样子'}}
			</view>
		</scroll-view>
		<view class="mainScrollerPageControl">
			<block v-for="(bookItem,index) in bookList" class="pageControlItem" :key="index" v-bind:id="index">
				<view v-if="currentIndex = index" class="pageControlItemSelected"></view>
				<view v-else class="pageControlItemUnSelected"></view>
				
				<view v-if="currentIndex = (bookList.length - 1)" :style="{'width':'5px'}"></view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bookList: [1, 2, 3],
				currentIndex:0
			}
		},
		methods:{
			onScroll(e){
				const scrollX = e.detail.scrollLeft;
			}
		}
	}
</script>

<style>
	.mainScrollerContainer {
		display: flex;
		position: relative;
		flex-direction: column;
		height: 120px;
		padding: 0px 20px 0px 20px;
	}
	.mainScroller{
		white-space: nowrap;
		width: 100%;
		overflow: hidden;
		height: 120px;
	}

	.bookItemContainer {
		display: inline-block;
		border-radius: 12px;
		width: 100%;
		height: 120px;
		background-color: #4CD964;
	}
	.mainScrollerPageControl{
		display: flex;
		position: absolute;
		bottom: 10px;
		height: 6px;
		left: 20px;
		right: 20px;
		justify-content: center;
	}
	.pageControlItemSelected{
		display: flex;
		background-color: #FF2525;
		width: 6px;
		height: 6px;
		border-radius: 3px;
	}
	.pageControlItemUnSelected{
		display: flex;
		background-color: #FFFFFF;
		width: 6px;
		height: 6px;
		border-radius: 3px;
	}
</style>

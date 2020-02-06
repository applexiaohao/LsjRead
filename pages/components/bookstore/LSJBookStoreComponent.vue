<template>
	<view class="bookStoreContainer">
		<view class="tabbar">
			<view v-for="(tabbarItem,index) in tabbarItemList" :key="index" v-bind:id="index" class="tabbarItem"  @tap="onTapItem">
				<text :class="{item:true, select:(selectIndex == index),unselect:(selectIndex != index)}">{{tabbarItem}}</text>
			</view>
		</view>
		<scroll-view class="bookStoreScrollView" scroll-y="true" show-scrollbar="false">
			<bookstoresearch></bookstoresearch>
			<mainScroller></mainScroller>
			<announcement></announcement>
			<view class="bookStoreSeparateLine"></view>
			<recommendsection></recommendsection>
			<recommendbooklist></recommendbooklist>
		</scroll-view>
	</view>
</template>

<script>
	import LSJBookStoreSearchComponent from './bookstoresearch/LSJBookStoreSearchComponent.vue'
	import LSJBookStoreMainScrollerComponent from './bookstoremainscroller/LSJBookStoreMainScrollerComponent.vue'
	import LSJBookStoreAnnouncementComponent from "./bookstoreannouncement/LSJBookStoreAnnouncementComponent.vue"
	import LSJBookStoreRecommendSectionComponent from './bookstoresection/LSJBookStoreRecommendSectionComponent.vue'
	import LSJBookStoreRecommendList from './bookstorelist/LSJBookStoreRecommendList.vue'

	export default {
		components: {
			bookstoresearch: LSJBookStoreSearchComponent,
			mainScroller: LSJBookStoreMainScrollerComponent,
			announcement: LSJBookStoreAnnouncementComponent,
			recommendsection: LSJBookStoreRecommendSectionComponent,
			recommendbooklist: LSJBookStoreRecommendList
		},
		mounted() {
			uni.setNavigationBarTitle({
				title: '老司机小说网'
			})
		},
		data() {
			return {
				selectIndex: 0,
				tabbarItemList: ['推荐', '女频', '男频', '听书', '漫画', '鬼故事'],
			}
		},
		methods:{
			onTapItem(e){
				if (this.selectIndex == e.currentTarget.id){
					uni.showToast({
						title:'相同哦~',
						icon:'none'
					});
					return;
				}
				this.selectIndex = e.currentTarget.id;
			}
		}
	}
</script>

<style>
	.bookStoreContainer {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}

	.tabbar {
		display: flex;
		flex-direction: row;
		height: 40px;
	}

	.tabbarItem {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		justify-content: center;
		border-width: 2px;
		border-color: #007AFF;
		border-radius: 15px;
		align-items: center;
	}

	.item {
		display: flex;
		align-self: center;
		text-align: right;
		font-size: 16px;
		font-weight: bold;
		line-height: 30px;
	}

	.select {
		display: flex;
		color: rgba(255, 39, 66, 1);
	}

	.unselect {
		display: flex;
		color: rgba(127, 127, 129, 1);
	}

	.bookStoreSeparateLine {
		background-color: #D6D6D6;
		height: 1px;
		width: 100%;
	}

	.bookStoreScrollView {
		display: flex;
		position: absolute;
		top: 40px;
		left: 0px;
		right: 0px;
		bottom: 51px;
	}
</style>

<template>
	<div class="bookShelfContainer">
		<uni-grid :column="3" :square="false" :show-border="false" :horizontal-interval="30" :vertical-interval="20" class="bookGridContainer">
			<uni-grid-item v-for="(bookItem,index) in bookShelfList" :key="bookItem.bookId" class="bookItemContainer" :index="index">
				<bookItem :book="bookItem"></bookItem>
			</uni-grid-item>
			<uni-grid-item class="bookItemContainer" :index="index">
				<bookAddItem ></bookAddItem>
			</uni-grid-item>
		</uni-grid>
	</div>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue";
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import LSJBookItemComponent from "./book/LSJBookItemComponent.vue"
	import LSJBookItemAddComponent from "./book/LSJBookItemAddComponent.vue"
	export default {
		components:{
			uniGrid,
			uniGridItem,
			bookItem:LSJBookItemComponent,
			bookAddItem:LSJBookItemAddComponent
		},
		
		mounted() {
			uni.setNavigationBarTitle({
				title:'书架'
			});
		},
		
		data(){
			return {
				bookShelfList:[
					{
						bookId:'2222',
						title:'庆余年',
						progress:'连载 未读',
						imgUrl:''
					},
					{
						bookId:'2223',
						title:'诡秘之主',
						progress:'连载 已读22%',
						imgUrl:''
					},
					{
						bookId:'2224',
						title:'大清问道',
						progress:'完结 已读22%',
						imgUrl:''
					},
					{
						bookId:'2225',
						title:'庆余年',
						progress:'连载 未读',
						imgUrl:''
					},
					{
						bookId:'2226',
						title:'庆余年',
						progress:'连载 未读',
						imgUrl:''
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.bookShelfContainer{
		display: flex;
		position: absolute;
		top: 0px;
		left: 30px;
		right: 30px;
		bottom: 51px;
		flex-direction: column;
		background-color: $uni-bg-color;
	}
	.bookGridContainer{
		display: flex;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
	}
	.bookItemContainer{
		height: 163px;
	}
</style>

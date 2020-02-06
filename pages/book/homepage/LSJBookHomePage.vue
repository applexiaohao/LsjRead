<template>
	<view class="book-homepage-container">
		<bookhead></bookhead>
		<comment></comment>
		<toolbar></toolbar>
	</view>
</template>

<script>
	import LSJBookHomePageToolbarComponent from './toobar/LSJBookHomePageToolbarComponent.vue'
	import LSJBookHomePageHeadComponent from './bookhead/LSJBookHomePageHeadComponent.vue'
	import LSJHomePageCommentComponent from './comment/LSJHomePageCommentComponent.vue'
	export default {
		components:{
			toolbar:LSJBookHomePageToolbarComponent,
			bookhead:LSJBookHomePageHeadComponent,
			comment:LSJHomePageCommentComponent
		},
		
		onLoad(option) {
			option = {title:'我爱你'};
			uni.setNavigationBarTitle({
				title:option.title
			});
		},
		
	}
</script>

<style>
	.book-homepage-container{
		display: flex;
		position: absolute;
		flex-direction: column;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
	}
</style>

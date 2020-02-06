<template>
	<view class="bookContainer" @tap="onTapBookItem">
		<view class="bookImage"></view>
		<text class="bookTitle">{{book.title}}</text>
		<text class="bookProgress">{{book.progress}}</text>
	</view>
</template>

<script>
	export default {
		props:{
			book:{
				type:Object,
				default:null
			}
		},
		mounted() {
			// uni.showToast({
			// 	title:this.book.title,
			// 	icon:"none"
			// })
		},
		methods:{
			onTapBookItem(e){
				uni.navigateTo({
					url:'../../../../book/homepage/LSJBookHomePage'
				});
			}
		}
	}
</script>

<style lang="scss">
	.bookContainer{
		display: flex;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		flex-direction: column;
		background-color: $uni-bg-color;
	}
	.bookImage{
		display: flex;
		height: 113px;
		background-color: #FF0000;
	}
	.bookTitle{
		display: flex;
		margin-top: 10px;
		font-size: 15px;
		font-weight: bold;
	}
	.bookProgress{
		display: flex;
		margin-top: 2px;
		font-size: 12px;
		color: #999999;
	}
</style>

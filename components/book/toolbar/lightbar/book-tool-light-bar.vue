<template>
	<view class="book-read-tool-light-bar-container">
		<text class="book-read-tool-light-bar-left-title">{{'-'}}</text>
		<view class="book-read-tool-light-bar-left-slider">
			<slider value="60" step="5" />			
		</view>
		<text class="book-read-tool-light-bar-right-title">{{'+'}}</text>
	</view>
</template>

<script>
</script>

<style>
	.book-read-tool-light-bar-container{
		display: flex;
		position: absolute;
		top: 1px;
		left: 0px;
		right: 0px;
		height: 76px;
	}
	.book-read-tool-light-bar-left-title{
		font-size: 35px;
		align-self: center;
		margin-right: 10px;
		margin-left: 20px;
	}
	.book-read-tool-light-bar-right-title{
		font-size: 35px;
		align-self: center;
		margin-left: 10px;
		margin-right: 20px;
	}
	.book-read-tool-light-bar-left-slider{
		flex-grow: 1;
		align-self: center;
	}
</style>

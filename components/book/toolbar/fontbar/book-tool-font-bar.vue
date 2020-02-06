<template>
	<view class="book-read-tool-font-bar-container">
		<text class="book-read-tool-font-bar-left-title">{{'A'}}</text>
		<view class="book-read-tool-font-bar-left-slider">
			<slider value="60" step="5" />			
		</view>
		<text class="book-read-tool-font-bar-right-title">{{'A'}}</text>
	</view>
</template>

<script>
</script>

<style>
	.book-read-tool-font-bar-container{
		display: flex;
		position: absolute;
		top: 1px;
		left: 0px;
		right: 0px;
		height: 76px;
	}
	.book-read-tool-font-bar-left-title{
		font-size: 18px;
		align-self: center;
		margin-right: 10px;
		margin-left: 20px;
	}
	.book-read-tool-font-bar-right-title{
		font-size: 24px;
		align-self: center;
		margin-left: 10px;
		margin-right: 20px;
	}
	.book-read-tool-font-bar-left-slider{
		flex-grow: 1;
		align-self: center;
	}
</style>

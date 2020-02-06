<template>
	<view class="book-read-purchase-container">
		<view class="book-read-purchase-line"></view>
		<view class="book-read-purchase-offset-ticket">
			<text class="book-read-purchase-offset-summary">{{'0.1折限时折扣'}}</text>
			<text class="book-read-purchase-offset-title">{{'3月+666章节券'}}</text>
			<view style="flex-grow: 1;"></view>
			<text class="book-read-purchase-offset-origin-price">{{'60元'}}</text>
			<text class="book-read-purchase-offset-current-price">{{'6元'}}</text>
		</view>
		<view class="book-read-purchase-ticket">
			<text class="book-read-purchase-button">{{'购买章节券'}}</text>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.book-read-purchase-container{
		display: flex;
		flex-direction: column;
		position: absolute;
		bottom: 0px;
		left: 0px;
		right: 0px;
		height: 149px;
	}
	.book-read-purchase-line{
		display: flex;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		background-color: #979797;
		opacity: 0.2;
		height: 1px;
	}
	.book-read-purchase-offset-ticket{
		display: flex;
		position: relative;
		margin-top: 18px;
		margin-left: 28px;
		margin-right: 28px;
		height: 50px;
		background-color: #FFF7F8;
		border-radius: 4px;
		border-style: solid;
		border-width: 1px;
		border-color: #FF8593;
		flex-direction: row;
	}
	.book-read-purchase-offset-summary{
		display: flex;
		position: absolute;
		top: 0px;
		right: 0px;
		padding: 1px 9px 2px 9px;
		font-size: 9px;
		background-color: #FF223B;
		border-radius: 0px 4px 0px 0px;
		color: #FEFEFE;
		height: 12px;
	}
	.book-read-purchase-offset-origin-price{
		display: flex;
		font-size: 10px;
		color: #999999;
		text-decoration: line-through;
		align-self: center;
		margin-right: 6px;
	}
	.book-read-purchase-offset-current-price{
		font-size: 16px;
		font-weight: bold;
		align-self: center;
		margin-right: 21px;
	}
	.book-read-purchase-offset-title{
		display: flex;
		color: #333333;
		font-size: 16px;
		align-self: center;
		margin-left: 14px;
	}
	.book-read-purchase-ticket{
		display: flex;
		position: relative;
		flex-direction: row;
		margin-left: 28px;
		margin-right: 28px;
		margin-top: 12px;
		height: 50px;
		border-radius: 4px;
		border-style: solid;
		border-width: 1px;
		border-color: #979797;
		flex-direction: row;
		justify-content: center;
	}
	.book-read-purchase-button{
		color: #333333;
		font-size: 15px;
		align-self: center;
	}
</style>

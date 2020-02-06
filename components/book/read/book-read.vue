<template>
	<scroll-view class="book-read-container"  scroll-y="true" >
		<view class="book-read-title-section">
			<text class="book-read-title">{{chapterTitle}}</text>
		</view>
		<view class="book-read-content-section">
			<text class="book-read-content">{{content}}</text>
			<!-- <u-parse :content="content"/> -->
		</view>
		<view class="book-read-progress-section">
			<text class="book-read-progress">{{progress}}</text>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		data(){
			return {
				chapterTitle:'第一章 荣耀归来',
				content:"在电脑中，头像是标识用户身份的一张图片。在游戏或者虚拟世界中，头像可以以三维形式表示；或在网络论坛等在线社区中使用二维形式作为图标。它在MUD早期系统中还可指文本排列结构。这是一个代表用户的对象。术语“头像”还可以与账户名、别名联系，指代一个互联网用户。2018年3月2日，北京网信办对外公布通知，知乎平台因管理不严，传播违法违规信息，根据相关法律法规，要求各应用商店下架知乎App七天。[41] 苹果的中国区App Store中可以搜索到知乎App但无法下载，在中国各安卓应用商店，则无法找到知乎App。知乎发布公告表示，正扩大整治“违法有害信息”。公告表示，正扩大整治“违法有害信息”。一些媒体认为这可能指的是与有知乎网站用户以司机连续疲劳驾驶的问题，公告表示，正扩大整治“违法有害信息”。一些媒体认为这可能指的是与有知乎网站用户以司机连续疲劳驾驶的问题，公告表示，正扩大整治“违法有害信息”。一些媒体认为这可能指的是与有知乎网站用户以司机连续疲劳驾驶的问题，公告表示，正扩大整治“违法有害信息”。一些媒体认为这可能指的是与有知乎网站用户以司机连续疲劳驾驶的问题，   在电脑中，头像是标识用户身份的一张图片。在游戏或者虚拟世界中，头像可以以三维形式表示；或在网络论坛等在线社区中使用二维形式作为图标。它在MUD早期系统中还可指文本排列结构。这是一个代表用户的对象。术语“头像”还可以与账户名、别名联系，指代一个互联网用户。2018年3月2日，北京网信办对外公布通知，知乎平台因管理不严，传播违法违规信息，根据相关法律法规，要求各应用商店下架知乎App七天。[41] 苹果的中国区App Store中可以搜索到知乎App但无法下载，在中国各安卓应用商店，则无法找到知乎App。知乎发布公告表示，正扩大整治“违法有害信息”。公告表示，正扩大整治“违法有害信息”。一些媒体认为这可能指的是与有知乎网站用户以司机连续疲劳驾驶的问题，公告表示，正扩大整治“违法有害信息”。一些媒体认为这可能指的是与有知乎网站用户以司机连续疲劳驾驶的问题，公告表示，正扩大整治“违法有害信息”。一些媒体认为这可能指的是与有知乎网站用户以司机连续疲劳驾驶的问题，公告表示，正扩大整治“违法有害信息”。一些媒体认为这可能指的是与有知乎网站用户以司机连续疲劳驾驶的问题",
				progress:'3.4%'
			}
		}
	}
</script>

<style>
	.book-read-container{
		display: flex;
		position: absolute;
		bottom: 0px;
		top: 0px;
		left: 0px;
		right: 0px;
	}
	.book-read-title-section{
		display: flex;
		position: relative;
		flex-grow: 1;
		margin-top: 12px;
	}
	.book-read-title{
		display: flex;
		position: relative;
		font-size: 12px;
		color: #999999;
	}
	.book-read-content-section{
		display: flex;
		flex-grow: 1;
		position: relative;
		margin-top: 12px;
	}
	.book-read-content{
		display: flex;
		position: relative;
		flex-grow: 1;
		font-size: 15px;
	}
	.book-read-progress-section{
		display: flex;
		position: relative;
		margin-top: 12px;
		margin-bottom: 12px;
	}
	.book-read-progress{
		font-size: 10px;
		position: relative;
		color: #333333;
	}
</style>

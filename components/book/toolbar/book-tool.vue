<template>
	<view id="book-read-tool-container" class="book-read-tool-container" :style="{height:component.height()}">
		<lightBar v-if="component.showLightBar"></lightBar>
		<fontBar v-if="component.showFontBar"></fontBar>
		<view class="book-read-tool-line"></view>
		<view class="book-read-tool-content">
			<view v-for="(bookToolItem,index) in bookToolList" class="book-read-tool-item-container" :key="index" v-bind:id="index" @tap="onTapEvent">
				<view class="book-read-tool-item-image"></view>
				<text class="book-read-tool-item-title">{{bookToolItem.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import lightBar from "./lightbar/book-tool-light-bar.vue"
	import fontBar from "./fontbar/book-tool-font-bar.vue"
	let self = null;
	export default {
		inject: ['bookPage'],
		created() {
			self = this;
		},
		components:{
			lightBar,
			fontBar
		},
		data() {
			return {
				component:{
					showLightBar:false,
					showFontBar:true,
					height(){
						if (self.component.showLightBar){
							return (70 + 76) + 'px';
						}
						if (self.component.showFontBar){
							return (70 + 76) + 'px';
						}
						return '70px';
					}
				},
				animationData: {},
				bookToolList: [{
						title: '目录'
					},
					{
						title: '亮度'
					},
					{
						title: '字体'
					},
					{
						title: '夜间/白天'
					}
				]
			}
		},
		mounted() {
			self.bookPage.exchangeToolBarHeight(self.component.height());
		},
		methods:{
			onTapEvent(e){
				if(e.currentTarget.id == 0){
					self.component.showFontBar = false;
					self.component.showLightBar = false;
				}
				if(e.currentTarget.id == 1){
					self.component.showLightBar = !self.component.showLightBar;
					self.component.showFontBar = false;
				}
				if(e.currentTarget.id == 2){
					self.component.showFontBar = !self.component.showFontBar;
					self.component.showLightBar = false;
				}
				if(e.currentTarget.id == 3){
					self.component.showFontBar = false;
					self.component.showLightBar = false;
				}
				self.bookPage.exchangeToolBarHeight(self.component.height());
			}
		}
	}
</script>

<style>
	.book-read-tool-container {
		display: flex;
		flex-direction: column;
		position: absolute;
		bottom: 0px;
		left: 0px;
		right: 0px;
		height: 70px;
	}
	
	.book-read-tool-line {
		display: flex;
		position: absolute;
		left: 0px;
		right: 0px;
		background-color: #979797;
		opacity: 0.2;
		height: 1px;
		bottom: 70px;
	}

	.book-read-tool-content {
		display: flex;
		position: absolute;
		bottom: 0px;
		left: 0px;
		right: 0px;
		height: 70px;
		flex-direction: row;
	}

	.book-read-tool-item-container {
		display: flex;
		position: relative;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
	}

	.book-read-tool-item-image {
		display: flex;
		width: 18px;
		height: 18px;
		background-color: #007AFF;
		align-self: center;
	}

	.book-read-tool-item-title {
		font-size: 12px;
		color: #333333;
		margin-top: 10px;
		align-self: center;
	}
</style>

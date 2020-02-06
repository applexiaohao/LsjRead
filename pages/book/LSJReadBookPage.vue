<template>
	<view class="book-container">
		<view :animation="animationData" class="read-book-content" :style="{'bottom':component.height}" @tap="onTapBookContent">
			<bookRead></bookRead>
		</view>
		<bookTool v-if="component.showTool"></bookTool>
		<bookPurchase v-if="component.showPurchase"></bookPurchase>
	</view>
</template>

<script>
	import bookRead from "@/components/book/read/book-read.vue";
	import bookTool from "@/components/book/toolbar/book-tool.vue";
	import bookPurchase from "@/components/book/toolbar/purchase/book-purchase.vue";

	let self = null;
	export default {
		created() {
			self = this;
		},
		onLoad(option) {
			uni.showToast({
				title: option.bookId,
				icon: "none"
			});
		},
		provide() {
			return {
				bookPage: this
			}
		},
		data(){
			return {
				animationData:{},
				component:{
					showTool:true,
					showPurchase:false,
					height:'0px',
				}
			}
		},
		components: {
			bookRead,
			bookTool,
			bookPurchase
		},
		methods:{
			onTapBookContent(e){
				// this.component.showTool = !this.component.showTool;
			},
			exchangeToolBarHeight(height){
				this.component.height = height;
			}
		}
	}
</script>

<style scoped>
	.book-container{
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
	}
	.read-book-content {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 20px;
		right: 20px;
	}
</style>

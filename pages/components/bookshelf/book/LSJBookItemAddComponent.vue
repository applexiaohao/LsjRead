<template>
	<div class="bookAddContainer">
		<div class="bookAddImage"></div>
	</div>
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
		}
	}
</script>

<style lang="scss">
	.bookAddContainer{
		display: flex;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		flex-direction: column;
		background-color: $uni-bg-color;
	}
	.bookAddImage{
		display: flex;
		height: 113px;
		background-color: #FFFF00;
	}
</style>

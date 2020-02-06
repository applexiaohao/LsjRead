<template>
	<view class="functionAreasContainer">
		<uni-list>
		    <uni-list-item title="阅读记录" :show-arrow="true" @tap="onClickReadHistory"></uni-list-item>
		    <uni-list-item title="意见反馈" :show-arrow="true" @tap="onClickFeedback"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	
	export default {
	    components: {uniList,uniListItem},
		methods:{
			onClickReadHistory(e){
				uni.showToast({
					title:'阅读记录',
					icon:'none'
				})
			},
			onClickFeedback(e){
				uni.showToast({
					title:'意见反馈',
					icon:'none'
				})
			}
		}
	}
</script>

<style>
	.functionAreasContainer{
		height: 90px;
	}
</style>

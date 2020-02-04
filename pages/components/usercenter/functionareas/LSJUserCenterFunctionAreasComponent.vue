<template>
	<div class="functionAreasContainer">
		<uni-list>
		    <uni-list-item title="阅读记录" :show-arrow="true"></uni-list-item>
		    <uni-list-item title="意见反馈" :show-arrow="true"></uni-list-item>
		</uni-list>
	</div>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	
	export default {
	    components: {uniList,uniListItem}
	}
</script>

<style>
	.functionAreasContainer{
		height: 90px;
	}
</style>

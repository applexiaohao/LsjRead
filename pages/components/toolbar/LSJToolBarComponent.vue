<template>
	<div class="toolbar">
		<view v-for="(item,index) in toolbarItemList" class="toolbarItem" @click="onToolBarItemClick" :key="index" v-bind:id="index">
			<view class="item" v-bind:id="index" :key="count">{{toolbarItemList[index] + index}}</view>
		</view>
	</div>
</template>

<script>
	import {
	    mapMutations
	} from 'vuex'
	let self = this;
	
	
	export default {
		
		created () {
			self = this;
		},
		updated(){
			uni.showToast({
				title:'渲染完成' + self.count
			})
		},
		data() {
			return {
				count:1,
				toolbarItemList:['书城','书架','任务','个人中心'],
			}
		},
		methods: {
			...mapMutations(['exchangeRootComponent']),
			onToolBarItemClick(e) {
				self.exchangeRootComponent(e.target.id)
			}
		}
	}
</script>

<style>
	.toolbar{
		display: flex;
		flex-direction: row;
		height: 50px;
		background-color: #4CD964;
		align-items: center;
		justify-content: center;
	}
	.toolbarItem{
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}
</style>

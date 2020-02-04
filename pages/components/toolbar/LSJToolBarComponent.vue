<template>
	<div class="toolbarContainer">
		<view class="toolbar-split-line"></view>
		<div class="toolbar">
			<view v-for="(item,index) in toolbarItemList" class="toolbarItem" @click="onToolBarItemClick" :key="index" v-bind:id="index">
				<template v-if="currentRootComponentIndex == index">
					<view class="item" v-bind:id="index" :key="count">
						{{toolbarItemList[index]}}
						<view class="select-line" />
					</view>
				</template>
				<template v-else>
					<view class="item" v-bind:id="index" :key="count">
						{{toolbarItemList[index]}}
					</view>
				</template>
			</view>
		</div>
	</div>
</template>

<script>
	import {
		mapState,
	    mapMutations
	} from 'vuex'
	let self = this;
	
	export default {
		created () {
			self = this;
		},
		updated(){
	
		},
		computed: {
			...mapState(['currentRootComponentIndex'])
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
	.toolbarContainer{
		display: flex;
		position: absolute;
		bottom: 0px;
		left: 0px;
		right: 0px;
		flex-direction: column;
		height: 51px;
	}
	.toolbar{
		display: flex;
		flex-direction: row;
		height: 50px;
		align-items: center;
		justify-content: center;
	}
	.toolbar-split-line{
		display: flex;
		height: 1px;
		width: 100%;
		background-color: #979797;
		opacity: 0.2;
	}
	.toolbarItem{
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}
	.item{
		align-self: center;
		font-weight: bold;
	}
	.select-line{
		display: flex;
		flex-grow: 1;
		margin-top: 4px;
		height: 2px;
		background-color: #ff0000;
		border-radius: 1px;
	}
</style>

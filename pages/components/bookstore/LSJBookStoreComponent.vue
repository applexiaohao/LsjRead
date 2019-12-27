<template>
	<div class="bookStoreContainer">
		<div class="tabbar">
			<div class="tabbarItem">
				<text class="item select">{{tabbarItemList[0]}}</text>
			</div>
			<div class="tabbarItem">
				<text class="item unselect">{{tabbarItemList[1]}}</text>
			</div>
			<div class="tabbarItem">
				<text class="item unselect">{{tabbarItemList[2]}}</text>
			</div>
			<div class="tabbarItem">
				<text class="item unselect">{{tabbarItemList[3]}}</text>
			</div>
			<div class="tabbarItem">
				<text class="item unselect">{{tabbarItemList[4]}}</text>
			</div>
		</div>
		<div class="search"></div>
		<div class="mainScroller"></div>
		<div class="sectionScroller"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				tabbarItemList:['推荐','女频','男频','听书','漫画','鬼故事'],
			}
		}
	}
</script>

<style>
	.bookStoreContainer{
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}
	.tabbar {
		display: flex;
		flex-direction: row;
		height: 40px;
	}
	.tabbarItem {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		justify-content: center;
		border-width: 2px;
		border-color: #007AFF;
		border-radius: 15px;
		align-items: center;
	}
	.item {
		display: flex;
		align-self: center;
		text-align: right;
		font-size:16px;
		font-weight:bold;
		line-height:30px;
	}
	
	.select {
		display: flex;
		color:rgba(255,39,66,1);
	}
	
	.unselect {
		display: flex;
		color:rgba(127,127,129,1);
	}
	.search{
		display: flex;
		background-color: #007AFF;
		height: 40px;
	}
	.mainScroller{
		display: flex;
		height: 120px;
		background-color: red;
	}
	.sectionScroller{
		display: flex;
		flex-grow: 1;
		width: 100%;
		background-color: #007AFF;
	}
</style>

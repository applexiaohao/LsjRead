<template>
	<view class="content">
		<template v-if="currentRootComponentIndex == 0">
			<bookstore></bookstore>
		</template>
		<template v-if="currentRootComponentIndex == 1">
			<bookshelf></bookshelf>
		</template>
		<template v-if="currentRootComponentIndex == 2">
			<usermission></usermission>
		</template>
		<template v-if="currentRootComponentIndex == 3">
			<usercenter></usercenter>
		</template>
		
		<toolbar/>
	</view>
</template>

<script>
	import LSJBookStoreComponent from "../components/bookstore/LSJBookStoreComponent.vue";
	import LSJUserCenterComponent from "../components/usercenter/LSJUserCenterComponent.vue"
	import LSJBookShelfComponent from "../components/bookshelf/LSJBookShelfComponent.vue"
	import LSJUserMissionComponent from "../components/usermission/LSJUserMissionComponent.vue"
	import LSJToolBarComponent from "../components/toolbar/LSJToolBarComponent.vue"
	import {
	    mapState
	} from 'vuex'
	
	let self = this;
	export default {
		created () {
		    self = this;
		},
		computed: {
			...mapState(['currentRootComponentIndex'])
		},
		data() {
			return{
				navigationBarTitle:'老司机小说网',
			}
		},
		components:{
			bookstore:LSJBookStoreComponent,
			bookshelf:LSJBookShelfComponent,
			usermission:LSJUserMissionComponent,
			usercenter:LSJUserCenterComponent,
			toolbar:LSJToolBarComponent
		},
		onLoad() {
			uni.showToast({
				title:'欢迎回来',
				icon:'none'
			});
		},

	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		padding: 10px,10px,10px,10px;
	}
	
</style>

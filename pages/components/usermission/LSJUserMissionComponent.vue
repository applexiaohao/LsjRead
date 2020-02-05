<template>
	<div class="userMissionContainer">
		<accountMission></accountMission>
		<div class="mmm">
			<usermissionlist></usermissionlist>
		</div>
	</div>
</template>

<script>
	import LSJUserMissionAccountComponent from "./accountmission/LSJUserMissionAccountComponent.vue"
	import LSJUserMissionList from "./usermissionlist/LSJUserMissionList.vue"
	
	export default {
		mounted() {
			uni.setNavigationBarTitle({
				title:'任务'
			})
		},
		components:{
			usermissionlist:LSJUserMissionList,
			accountMission:LSJUserMissionAccountComponent
		}
	}
</script>

<style lang="scss">
	.userMissionContainer{
		display: flex;
		position: absolute;
		left: 0px;
		right: 0px;
		top: 0px;
		bottom: $lsj-toolbar-height;
		flex-direction: column;
	}
	.mmm{
		display: flex;
		position: relative;
		flex-grow: 1;
	}
</style>

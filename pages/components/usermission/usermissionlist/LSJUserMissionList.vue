<template>
	<scroll-view  class="missionListContainer" :scroll-y="true">
		<usermissionsection></usermissionsection>
		<usermissioncell></usermissioncell>
		<usermissioncell></usermissioncell>
		<usermissioncell></usermissioncell>
		<usermissioncell></usermissioncell>
		<usermissionsection></usermissionsection>
		<usermissioncell></usermissioncell>
		<usermissioncell></usermissioncell>
		<usermissioncell></usermissioncell>
		<usermissioncell></usermissioncell>
		<usermissionsection></usermissionsection>
		<usermissionscancell></usermissionscancell>
	</scroll-view>
</template>

<script>
	import LSJUserMissionListSection from "./usermissionsection/LSJUserMissionListSection.vue"
	import LSJUserMissionListCell from "./usermissioncell/LSJUserMissionListCell.vue"
	import LSJUserMissionScanCell from "./usermissioncell/LSJUserMissionScanCell.vue"
	
	export default {
		components:{
			usermissioncell:LSJUserMissionListCell,
			usermissionsection:LSJUserMissionListSection,
			usermissionscancell:LSJUserMissionScanCell
		}
	}
</script>

<style>
	.missionListContainer{
		display: flex;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom:0px;
	}
</style>

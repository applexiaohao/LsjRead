<template>
	<view class="userMissionCellContainer">
		<view class="userMissionCellSplitLine"></view>
		<view class="userMissionCellContent">
			<view class="userMissionCellTitleContainer">
				<text class="userMissionCellTitle">{{'首次绑定手机号 '}}</text>
				<text class="userMissionCellSummary">{{'免费+4'}}</text>
			</view>
			<view class="userMissionCellButtonContainer selectedCellButtonContainer">
				<text class="userMissionCellButton selectedCellButton">{{'已完成'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.userMissionCellContainer {
		display: flex;
		flex-direction: column;
	}

	.userMissionCellSplitLine {
		display: flex;
		height: 1px;
		width: 100%;
		background-color: #F5F6F8;
	}

	.userMissionCellContent {
		display: flex;
		flex-direction: row;
		margin-top: 9px;
		margin-bottom: 9px;
		justify-content: space-between;
	}

	.userMissionCellTitleContainer {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
	}

	.userMissionCellTitle {
		display: flex;
		font-size: 15px;
	}

	.userMissionCellSummary {
		display: flex;
		font-size: 12px;
		margin-top: 2px;
	}
	.userMissionCellButtonContainer{
		display: flex;
		align-self: center;
		padding-left: 15px;
		padding-right: 15px;
		padding-top: 6px;
		padding-bottom: 6px;
		margin-right: 20px;
		border-radius: 15px;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-right-style: solid;
		border-right-width: 1px;
		border-top-style: solid;
		border-top-width: 1px;
		border-left-style: solid;
		border-left-width: 1px;
	}
	.unselectedCellButtonContainer{
		border-bottom-color: #979797;
		border-right-color: #979797;
		border-top-color: #979797;
		border-left-color: #979797;
	}
	.selectedCellButtonContainer{
		border-bottom-color: #FF2742;
		border-right-color: #FF2742;
		border-top-color: #FF2742;
		border-left-color: #FF2742;
	}
	.userMissionCellButton {
		display: flex;
		font-size: 12px;
	}
	.unselectedCellButton{
		color: #999999;
	}
	.selectedCellButton{
		color: #FF2742;
		font-weight: bold;
	}
</style>

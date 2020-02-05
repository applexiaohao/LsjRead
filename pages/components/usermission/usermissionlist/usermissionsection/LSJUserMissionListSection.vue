<template>
	<view class="userMissionSectionContainer">
		<div class="userMissionSectionMargin"></div>
		<div class="userMissionSectionTitleContainer">
			<div class="userMissionSectionHead"></div>
			<text class="userMissionSectionTitle">{{'福利攻略'}}</text>
		</div>
		<text class="userMissionSectionTitleSummary">{{'规则说明：推广好友阅读，可永久增加免费阅读次数'}}
		</text>
	</view>
</template>

<script>
</script>

<style>
	.userMissionSectionContainer {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
		margin-bottom: 18px;
	}
	.userMissionSectionMargin{
		height: 6px;
		background-color: #F5F6F8;
	}
	.userMissionSectionTitleContainer {
		margin-top: 18px;
		display: flex;
		flex-direction: row;
	}

	.userMissionSectionHead {
		width: 4px;
		height: 14px;
		background-color: #FF2742;
		border-radius: 2px;
		margin-left: 20px;
		margin-right: 10px;
		align-self: center;
	}
	.userMissionSectionTitle{
		display: flex;
		font-size: 18px;
		font-weight: bold;
	}
	.userMissionSectionTitleSummary{
		display: flex;
		font-size: 14px;
		color: #9B9B9B;
		margin-top: 4px;
		margin-left: 20px;
		margin-right: 20px;
	}
</style>

<template>
	<view class="userMissionScanCellContainer">
		<text class="userMissionScanTitle">{{'扫码开始阅读'}}</text>
		<div class="userMissionScanCellCodeImage"></div>
		<div class="userMissionScanCellAddressUrlContainer">
			<text class="userMissionScanCellAddressUrl">{{';lsdkjfa;ksdjf;alksjdf;laksjdf;fakjsdf;lajs;f'}}</text>
		</div>
		<text class="userMissionScanCellSummary">{{'阅读前请保存官方二维码，被封后可在官方继续阅读'}}</text>
		<div class="userMissionScanCellButtonContainer">
			<div :style="{'width':'20px'}"></div>
			<div class="userMissionScanCellButtonSaveContainer">
				<div class="userMissionScanCellButtonSave">{{'保存二维码'}}</div>
			</div>
			<div :style="{'width':'20px'}"></div>
			<div class="userMissionScanCellButtonCopyContainer">
				<div class="userMissionScanCellButtonCopy">{{'复制推广链接'}}</div>
			</div>
			<div :style="{'width':'20px'}"></div>
		</div>
	</view>
</template>

<script>
</script>

<style>
	.userMissionScanCellContainer {
		display: flex;
		flex-direction: column;
	}

	.userMissionScanTitle {
		display: flex;
		align-self: center;
		font-size: 18px;
		font-weight: bold;
		margin-top: 20px;
		margin-bottom: 8px;
	}

	.userMissionScanCellCodeImage {
		display: flex;
		width: 120px;
		height: 120px;
		align-self: center;
		background-color: #007AFF;
		margin-bottom: 15px;
	}

	.userMissionScanCellAddressUrlContainer {
		display: flex;
		align-self: center;
		position: relative;
		flex-direction: column;
		justify-content: center;
		border-radius: 20px;
		background-color: #F5F6F8;
		align-items: center;
		width: 230px;
		height: 40px;
		padding-left: 30px;
		padding-right: 30px;
		margin-bottom: 20px;
	}

	.userMissionScanCellAddressUrl {
		display: flex;
		font-size: 12px;
		text-align: center;
		align-self: center;
		line-break: normal;
	}

	.userMissionScanCellSummary {
		align-self: center;
		font-size: 13px;
		margin-bottom: 20px;
	}

	.userMissionScanCellButtonContainer {
		display: flex;
		flex-direction: row;
		margin-bottom: 25px;
	}
	
	.userMissionScanCellButtonSaveContainer{
		display: flex;
		flex-direction: column;
		background-color: #FF2742;
		border-radius: 27px;
		flex-grow: 1;
		justify-content: center;
	}
	.userMissionScanCellButtonSave{
		font-size: 15px;
		font-weight: bold;
		color: #FFFFFF;
		align-self: center;
		margin: 15px 20px 15px 20px;
	}
	.userMissionScanCellButtonCopyContainer{
		display: flex;
		flex-direction: column;
		border-color: #FF2742;
		border-radius: 27px;
		border-style: solid;
		border-width: 1px;
		flex-grow: 1;
		justify-content: center;
	}
	.userMissionScanCellButtonCopy{
		font-size: 15px;
		font-weight: bold;
		color: #FF2742;
		align-self: center;
		margin: 15px 20px 15px 20px;
	}
</style>

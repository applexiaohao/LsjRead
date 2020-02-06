<template>
	<view class="accountMissionContainer">
		<view class="accountMissionBg"></view>
		<view class="accountMissionContent">
			<view class="accountMissionSummayContainer">
				<view class="accountImageUrl"></view>
				<view class="accountMissionSummay">
					<view class="accountMissionSummayTitle">{{'画家'}}</view>
					<view class="accountMissionSummayChapterInfo">{{'已读章节:3  剩余免费章节:22'}}</view>
				</view>
			</view>
			<view class="accountMissionSplitLine"></view>
			<view class="accountMissionDetail">
				<view class="accountMissionDetailItem">
					<view class="accountMissionDetailItemTitle">{{'青铜5'}}</view>
					<view class="accountMissionDetailItemSummary">{{'每日免费25章'}}</view>
				</view>
				<view class="accountMissionDetailItem">
					<view class="accountMissionDetailItemTitle">{{'距离下一等级'}}</view>
					<view class="accountMissionDetailItemSummary">{{'还差一人'}}</view>
				</view>
				<view class="accountMissionDetailItem">
					<view class="accountMissionDetailItemTitle">{{'青铜4'}}</view>
					<view class="accountMissionDetailItemSummary">{{'每日免费30章'}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.accountMissionContainer{
		display: flex;
		flex-direction: column;
		position: relative;
		padding-top: 20px;
		padding-left: 12px;
		padding-right: 12px;
	}
	.accountMissionBg{
		display: flex;
		position: absolute;
		left: 0px;
		right: 0px;
		top: 0px;
		height: 150px;
		background-color: #FF7A78;
	}
	.accountMissionContent{
		display: flex;
		position: relative;
		flex-direction: column;
		height: 180px;
		background-color: #FFFFFF;
		padding-left: 22px;
		padding-right: 22px;
		padding-top: 15px;
		border-radius: 6px;
	}
	.accountMissionSummayContainer{
		display: flex;
		flex-direction: row;
	}
	.accountImageUrl{
		display: flex;
		width: 70px;
		height: 70px;
		background-color: #007AFF;
		border-radius: 35px;
	}
	.accountMissionSummay{
		display: flex;
		flex-direction: column;
		margin-left: 17px;
		justify-content: stretch;
		padding-top: 9px;
		padding-bottom: 9px;
	}
	.accountMissionSummayTitle{
		display: flex;
		font-size: 20px;
		font-weight: bold;
	}
	.accountMissionSummayChapterInfo{
		display: flex;
		font-size: 14px;
	}
	.accountMissionSplitLine{
		display: flex;
		position: relative;
		width: 100%;
		height: 1px;
		background-color: #979797;
		opacity: 0.2;
		margin-top: 14px;
	}
	.accountMissionDetail{
		display: flex;
		position: relative;
		flex-grow: 1;
		flex-direction: row;
	}
	.accountMissionDetailItem{
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
	}
	.accountMissionDetailItemTitle{
		display: flex;
		font-size: 16px;
		font-weight: bold;
		align-self: center;
	}
	.accountMissionDetailItemSummary{
		display: flex;
		font-size: 12px;
		color: #999999;
		align-self: center;
		margin-top: 8px;
	}
</style>

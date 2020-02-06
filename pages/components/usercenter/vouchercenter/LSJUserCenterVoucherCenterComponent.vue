<template>
	<view class="voucherCenterContainer">
		<view class="preferential-item" @tap="onPreferentialItemClick">
			<view class="preferential-item-feature">{{preferential.feature}}</view>
			<view class="preferential-item-content">
				<view class="preferential-item-title">{{preferential.title}}</view>
				<view class="preferential-item-summary">{{preferential.summary}}</view>
			</view>
			<view class="preferential-item-button" @tap="onPreferentialItemClick">
				<view class="preferential-item-button-title">{{'立即充值'}}</view>
			</view>
		</view>
		
		<view class="boughtContainer">
		    <view class="boughtItemContainer" @tap="onBoughtItemClick" id="0">
		        <text class="boughtItemPrice">{{'￥' + boughtItemList[0].price}}</text>
				<text class="boughtItemValue">{{boughtItemList[0].value}}</text>
		    </view>
			<view class="boughtItemContainer" @tap="onBoughtItemClick" id="1">
			    <text class="boughtItemPrice">{{'￥' + boughtItemList[1].price}}</text>
				<text class="boughtItemValue">{{boughtItemList[1].value}}</text>
			</view>
		</view>
		
		<view class="boughtContainer">
		    <view class="boughtItemContainer" @tap="onBoughtItemClick" id="2">
		        <text class="boughtItemPrice">{{'￥' + boughtItemList[2].price}}</text>
				<text class="boughtItemValue">{{boughtItemList[2].value}}</text>
		    </view>
			<view class="boughtItemContainer" @tap="onBoughtItemClick" id="3">
			    <text class="boughtItemPrice">{{'￥' + boughtItemList[3].price}}</text>
				<text class="boughtItemValue">{{boughtItemList[3].value}}</text>
			</view>
		</view>
		
		<view class="boughtContainer">
		    <view class="boughtItemContainer" @tap="onBoughtItemClick" id="4">
		        <text class="boughtItemPrice">{{'￥' + boughtItemList[4].price}}</text>
				<text class="boughtItemValue">{{boughtItemList[4].value}}</text>
		    </view>
			<view class="boughtItemContainer" @tap="onBoughtItemClick" id="5">
			    <text class="boughtItemPrice">{{'￥' + boughtItemList[5].price}}</text>
				<text class="boughtItemValue">{{boughtItemList[5].value}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"

	export default {
		data(){
			return {
				preferential:{
					feature:"0.1折",
					title:"今日充值特惠",
					summary:"充6元 送3月票 +666章节券"
				},
				boughtItemList:[ 
					{
						price:"1",
						value:"10章节券"
					},
					{
						price:"30",
						value:"300章节券"
					},
					{
						price:"50",
						value:"500章节券"
					},
					{
						price:"108",
						value:"1888章节券"
					},
					{
						price:"10",
						value:"10月票"
					},
					{
						price:"100",
						value:"110月票"
					}
				]
			}
		},
		components: {uniGrid,uniGridItem},
		methods:{
			onPreferentialItemClick(e){
				uni.showToast({
					title:'今日充值优惠'
				});
			},
			onBoughtItemClick(e){
				uni.showToast({
					title:this.boughtItemList[e.currentTarget.id].value,
					icon:'none'
				});
			}
		}
	}
</script>

<style>
	.voucherCenterContainer{
		display: flex;
		flex-direction: column;
		margin-top: 6px;
	}
	.preferential-item{
		display: flex;
		flex: 1;
		flex-shrink: 1;
		height: 80px;
		background-color: #F5F6F8;
		border-radius: 6px;
		margin-left: 17px;
		margin-right: 17px;
	}
	.preferential-item-feature{
		display: flex;
		position: absolute;
		background-color: #FF2742;
		padding-left: 6px;
		padding-right: 6px;
		font-size: 12px;
		border-radius: 6px 0px 0px 0px;
		height: 18px;
	}
	.preferential-item-content{
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		margin-left: 24px;
		justify-content: center;
	}
	.preferential-item-title{
		display: flex;
		font-size: 18px;
		font-weight: bold;
	}
	.preferential-item-summary{
		display: flex;
		margin-top: 3px;
		font-size: 12px;
		color: #FF2D43;
	}
	.preferential-item-button{
		display: flex;
		margin-right: 24px;
		width: 80px;
		height: 37px;
		align-self: center;
		border-radius: 6px;
		justify-content: center;
		background-color: #FF7C4F;
	}
	.preferential-item-button-title{
		font-size: 15px;
		align-self: center;
		color: #FFFFFF;
	}
	.boughtContainer{
		display: flex;
		flex-grow: 1;
		padding-left: 7px;
		padding-right: 7px;
	}
	.boughtItemContainer{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 60px;
		justify-content: center;
		background-color: #F5F6F8;
		border-radius: 6px;
		margin-top: 8px;
		margin-right: 10px;
		margin-left: 10px;
	}
	.boughtItemPrice{
		display: flex;
		font-size: 16px;
		font-weight: bold;
		align-self: center;
	}
	.boughtItemValue{
		display: flex;
		font-size: 12px;
		color: #999999;
		align-self: center;
	}
</style>

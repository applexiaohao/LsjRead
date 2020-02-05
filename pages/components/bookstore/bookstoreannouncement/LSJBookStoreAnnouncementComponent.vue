<template>
	<view class="announcementContainer">
		<view class="announcementTitleContainer">
			<text class="announcementTitle">{{'公告'}}</text>
		</view>
		<scroll-view id="scrollView" class="announcementSummaryContainer" scroll-x="true" :scroll-left="scrollLeft">
			<text id="summaryText" class="announcementSummary">{{'关注公众号：laoshijikaiche领取神秘大奖，不迷路'}}</text>
		</scroll-view>
	</view>
</template>

<script>
	let query = null;
	export default {
		mounted() {
			if (!query) {
				query = uni.createSelectorQuery().in(this);
			}
			const scrollView = query.select('#scrollView');
			const summaryText = query.select('#summaryText');
			scrollView.fields({size: true});
			summaryText.fields({size: true});
			
			query.exec((resList) => {
				const textWidth = resList[1].width;
				const scrollWidth = resList[0].width;
				
				setInterval(() => {
					this.scrollLeft += 1;
					if ((this.scrollLeft + scrollWidth) > textWidth) {
						this.scrollLeft = 0;
					}
				}, 250);
			})
		},

		data() {
			return {
				scrollLeft: 0,
				old: {
					scrollLeft: 0
				}
			}
		}
	}
</script>

<style>
		/* .uni-scroll-view {
			background-color: #fff;
			border-color: #fff;
			border-style: hidden;
		}
	 */
	.uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none;
	}
	.announcementContainer {
		display: flex;
		flex-direction: row;
		margin-top: 20px;
		margin-bottom: 20px;
		height: 24px;
		padding: 0px 20px 0px 20px;
	}

	.announcementTitleContainer {
		display: flex;
		background-color: #3F414F;
		border-radius: 6px;
		width: 44px;
		height: 24px;
		justify-content: center;
		margin-right: 10px;
	}

	.announcementTitle {
		display: flex;
		font-size: 12px;
		color: #FFFFFF;
		align-self: center;
	}

	.announcementSummaryContainer {
		display: flex;
		white-space: nowrap;
		overflow: hidden;
		width: 300px;
		height: 24px;
	}

	.announcementSummary {
		display: inline-block;
		font-size: 12px;
		line-clamp: 1;
	}
</style>

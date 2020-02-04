<template>
	<scroll-view class="userCenterContainer" scroll-y="true">
		<loginComponent></loginComponent>
		<accountInformation></accountInformation>
		<vouchercenter></vouchercenter>
		<functionareas></functionareas>
	</scroll-view>
</template>

<script>
	import LSJUserCenterLoginComponent from "./login/LSJUserCenterLoginComponent.vue";
	import LSJUserCenterAccountInformation from "./accountinformation/LSJUserCenterAccountInformation.vue";
	import LSJUserCenterVoucherCenterComponent from "./vouchercenter/LSJUserCenterVoucherCenterComponent.vue";
	import LSJUserCenterFunctionAreasComponent from "./functionareas/LSJUserCenterFunctionAreasComponent.vue";
	let self;
	export default {
		created() {
			self = this;
		},

		data() {
			return {
				width: 0
			}
		},
		mounted() {
			uni.setNavigationBarTitle({
				title: '个人中心'
			});
			// const systemInfo = uni.getSystemInfoSync();
			// uni.showToast({
			// 	title: systemInfo.windowHeight,
			// 	icon:'none'
			// });
		},
		components: {
			loginComponent: LSJUserCenterLoginComponent,
			accountInformation: LSJUserCenterAccountInformation,
			vouchercenter: LSJUserCenterVoucherCenterComponent,
			functionareas: LSJUserCenterFunctionAreasComponent
		},
		data() {
			return {
				loginState: false,
			}
		}
	}
</script>

<style>
	.userCenterContainer {
		display: flex;
		position: absolute;
		bottom: 51px;
		left: 0px;
		right: 0px;
		top: 0px;
		flex-direction: column;
		background-color: #FFFFFF;
	}
</style>

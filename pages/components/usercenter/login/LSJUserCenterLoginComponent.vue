<template>
	<view class="loginComponentContainer">
		<view class="headImg" />
		<view class="loginBtn" @tap="onClickLogin">登录/注册</view>
	</view>
</template>

<script>
	export default {
		methods:{
			onClickLogin(e){
				uni.showToast({
					title:'去登录',
					icon:'none'
				})
			}
		}
	}
</script>

<style>
	.loginComponentContainer{
		display: flex;
		width: 100%;
		padding-left: 25px;
		padding-right: 25px;
		height: 90px;
		background-color: #FFFFFF;
	}
	.headImg{
		width: 70px;
		height: 70px;
		background-color: #FF0000;
		align-self: center;
	}
	.loginBtn{
		font-size:18px;
		font-weight: bold;
		align-self: center;
		margin-left: 20px;
	}
</style>

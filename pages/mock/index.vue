<script setup lang="ts">
	import useStore from '@/store/home';
	import LotteryField from '@/components/common/lottery-field.vue';

	const {
		getHapplyEight,
		getDoubleColorBall,
		getWelfareLottery3D,
		getSevenHappy,
		getSixAddOne,
		get15x5
	} = useStore();

	async function getTicketData() {
		getHapplyEight();
		getDoubleColorBall();
		getWelfareLottery3D();
		getSevenHappy();
		getSixAddOne();
		get15x5();
	}
	
	const keyMap = ['happyEigihtDetails', 'dobuleColorBallDetails', 'welfareLotteryDetails', 'sevenHappyDetails', 'sixAddOneDetails', 'l15x15Details']

	getTicketData();
	
	const goToDetail = (key: string) => {
		uni.navigateTo({
			url: `detail/index?type=${key}`
		});
	};
</script>

<template>
	<view>
		<view v-for="key in keyMap" :key="key">
			<lottery-field :valueKey="key" :slice-length="1" footer-text="点击开玩"  @handleFooterClick="goToDetail(key)"/>
		</view>
	</view>
</template>

<style></style>

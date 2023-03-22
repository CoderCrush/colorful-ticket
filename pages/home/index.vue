<script setup lang="ts">
	import useStore from '@/store/home';
	import LotteryField from '@/components/common/lottery-field.vue';
	import {ticketNameMap} from '@/utils/constants';

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

	getTicketData();
	
	const handleFooterClick = (key: string) => {
		uni.navigateTo({
			url: `detail/index?type=${key}`
		});
	}
</script>

<template>
	<view>
		<uni-notice-bar show-icon scrollable text="模拟玩法已正式发布, 可以点击下方'模拟玩法'进行畅玩, 不要上头噢~" />
		<view v-for="key in ticketNameMap" :key="key">
			<lottery-field :valueKey="key" :slice-length="1" @handleFooterClick="handleFooterClick(key)"/>
		</view>
	</view>
</template>

<style></style>

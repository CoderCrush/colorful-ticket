<script setup lang="ts">
	import useHistoryStore from '@/store/history';
	import useHomeStore from '@/store/home';
	import {
		computed
	} from 'vue';
	import HistoryField from '@/components/common/history-field.vue';

	const {
		historyData
	} = useHistoryStore();

	const {
		happyEigihtDetails,
		dobuleColorBallDetails,
		welfareLotteryDetails,
		sevenHappyDetails,
		sixAddOneDetails,
		l15x15Details,
	} = useHomeStore();

	const historyList = computed(() => [{
			detail: happyEigihtDetails?. [0],
			historyData: historyData?.happyEigihtDetails || {},
			fieldTitle: '“选十”玩法奖池累计金额',
			field: 'happyEigihtDetails'
		},
		{
			detail: dobuleColorBallDetails?. [0],
			historyData: historyData.dobuleColorBallDetails || {},
			field: 'dobuleColorBallDetails'
		},
		{
			detail: welfareLotteryDetails?. [0],
			historyData: historyData.welfareLotteryDetails || {},
			field: 'welfareLotteryDetails'
		},
		{
			detail: sevenHappyDetails?. [0],
			historyData: historyData.sevenHappyDetails || {},
			field: 'sevenHappyDetails'
		},
		{
			detail: sixAddOneDetails?. [0],
			historyData: historyData.sixAddOneDetails || {},
			field: 'sixAddOneDetails'
		},
		{
			detail: l15x15Details?. [0],
			historyData: historyData.l15x15Details || {},
			field: 'l15x15Details'
		}
	]);
</script>

<template>
	<view>
		<view v-for="(history) in historyList" :key="history.field">
			<history-field v-bind="history" />
		</view>
	</view>
</template>

<style></style>

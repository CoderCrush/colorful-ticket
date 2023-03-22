import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { getDoubleColorBallData, getHapplyEightData, getWelfareLottery3DData, getSevenHappyData, getSixAddOneData, get15x5Data } from '@/api/hzfucai';
import { ILotteryResult } from '@/types/common';

function handleResult(target: ILotteryResult, imgSrc: string) {
	try {
		const { zjxq, qbqh } = target;
		const fieldNums = qbqh.split(',');

		return zjxq.map((item, i) => ({ ...item, fieldNum: fieldNums[i], kjjgqq: item.kjjgqq.split(' '), imgSrc }));
	} catch (err) {
		console.log(err);
	}
}

// 快乐8，选十玩法
function useHapplyEight() {
	const happyEigihtDetails = ref<Record<string, unknown>[]>([]);
	const getHapplyEight = async () => {
		try {
			const result: ILotteryResult = await getHapplyEightData();
			happyEigihtDetails.value = handleResult(result, 'https://www.hzfucai.net/statics/images/index/gg06.png');
		} catch (err) {
			console.log(err);
		}
	};

	return {
		happyEigihtDetails,
		getHapplyEight
	};
}
// 双色球
function useDoubleColorBall() {
	const dobuleColorBallDetails = ref<Record<string, unknown>[]>([]);
	const getDoubleColorBall = async () => {
		try {
			const result: ILotteryResult = await getDoubleColorBallData();
			dobuleColorBallDetails.value = handleResult(result, 'http://www.hzfucai.net/statics/images/index/gg01.png');
		} catch (err) {
			console.log(err);
		}
	};

	return {
		dobuleColorBallDetails,
		getDoubleColorBall
	};
}
// 福彩3D
function useWelfareLottery3D() {
	const welfareLotteryDetails = ref<Record<string, unknown>[]>([]);
	const getWelfareLottery3D = async () => {
		try {
			const result: ILotteryResult = await getWelfareLottery3DData();
			welfareLotteryDetails.value = handleResult(result, 'http://www.hzfucai.net/statics/images/index/gg02.png');
		} catch (err) {
			console.log(err);
		}
	};

	return {
		welfareLotteryDetails,
		getWelfareLottery3D
	};
}
// 七乐彩
function useSevenHappy() {
	const sevenHappyDetails = ref<Record<string, unknown>[]>([]);
	const getSevenHappy = async () => {
		try {
			const result: ILotteryResult = await getSevenHappyData();
			sevenHappyDetails.value = handleResult(result, 'http://www.hzfucai.net/statics/images/index/gg03.png');
		} catch (err) {
			console.log(err);
		}
	};

	return {
		sevenHappyDetails,
		getSevenHappy
	};
}
// 6+1
function useSixAddOne() {
	const sixAddOneDetails = ref<Record<string, unknown>[]>([]);
	const getSixAddOne = async () => {
		try {
			const result: ILotteryResult = await getSixAddOneData();
			sixAddOneDetails.value = handleResult(result, 'http://www.hzfucai.net/statics/images/index/gg04.png');
		} catch (err) {
			console.log(err);
		}
	};

	return {
		sixAddOneDetails,
		getSixAddOne
	};
}
// 15选5
function use15x5() {
	const l15x15Details = ref<Record<string, unknown>[]>([]);
	const get15x5 = async () => {
		try {
			const result: ILotteryResult = await get15x5Data();
			l15x15Details.value = handleResult(result, 'http://www.hzfucai.net/statics/images/index/gg05.png');
		} catch (err) {
			console.log(err);
		}
	};

	return {
		l15x15Details,
		get15x5
	};
}

export default defineStore(
	'home',
	() => {
		return { ...useHapplyEight(), ...useDoubleColorBall(), ...useWelfareLottery3D(), ...useSevenHappy(), ...useSixAddOne(), ...use15x5() };
	},
	{
		unistorage: true
	}
);

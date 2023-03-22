import { ref } from 'vue';
import { defineStore } from 'pinia';
import useWinLevel from '@/hooks/useWinLevel';
import useHomeStore from "./home";

interface IHistoryStoreOptions {
	type: string,
	date: string,
	list: Array<Array<number>>,
	nper: string
}

function findTarget(origin: Record<string, any>[], key: string) {
	return origin.find(({ qh }) => qh === key)
}

export default defineStore(
	'history',
	() => {
		const historyData = ref<Record<string, any>>({});
		const setHistoryStore = ({ type, date, list, nper }: IHistoryStoreOptions) => {
			const homeStore = useHomeStore();
			const target = historyData.value[type] ?? (historyData.value[type] = {});
			const mockMap = target[nper] ?? (target[nper] = { date, map: {} });
			list.forEach(balls => {
				const key = balls.join()
				const num = mockMap[key];
				const count = (num || 0) + 1;
				const { kjjgqq, kjjghq } = findTarget(homeStore[type], nper)
				const levelData = useWinLevel({ type, balls, count }, { redBallArea: kjjgqq, blueBallArea: kjjghq })
				mockMap.map[key] = levelData;
			})
		};

		return {
			historyData,
			setHistoryStore
		};
	},
	{
		unistorage: true
	}
);

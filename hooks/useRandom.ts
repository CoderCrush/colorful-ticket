import { ref } from 'vue';

const handleRandomDoubleColorBall = (count, randomList) => {
	const resultList = [];
	for (let i = 0; i < count.value; i++) {
		const ballNums = Array.from(
			{
				length: 33
			},
			(_, i) => i + 1
		);
		const result = [];
		for (let i = 0; i < 6; i++) {
			const [randomBall] = ballNums.splice(~~(Math.random() * ballNums.length - 1), 1);
			result.push(randomBall);
		}
		result.sort((a, b) => a - b);
		result.push(~~(Math.random() * 17) + 1);
		resultList.push(result);
	}
	randomList.value = resultList.map(name => name);
};

const randomFnMap = {
	dobuleColorBallDetails: handleRandomDoubleColorBall
};

export default function(count, type) {
	const randomList = ref<Record<string, unknown>[]>([]);
	const randomFn = randomFnMap[type];
	randomFn?.(count, randomList);
	const fn = randomFn?.bind(null, count, randomList);

	return [randomList, fn];
}

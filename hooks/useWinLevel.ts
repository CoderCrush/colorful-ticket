type ballType = string | number

interface IMockParams {
	type: string,
	balls: ballType[],
	count: number
}

interface IResultParams {
	redBallArea: ballType[];
	blueBallArea: ballType
}

const withoutBlueMap = {
	4: 5,
	5: 4,
	6: 3
}

const hasBlueMap = {
	0: 6,
	1: 6,
	2: 6,
	3: 5,
	4: 4,
	5: 3,
	6: 1
}

const handleCalcDoubleColorBallLevel = (mockBallArea: IResultParams, resultBallArea: IResultParams): number => {
	let winRedCount: ballType = 0;
	let isWinBlue = false;
	winRedCount = mockBallArea.redBallArea.reduce((prev, cur, i) => Number(prev) + Number(resultBallArea.redBallArea[i] == cur), winRedCount);
	isWinBlue = mockBallArea.blueBallArea == resultBallArea.blueBallArea;
	
	if(isWinBlue) return hasBlueMap[winRedCount];
	return withoutBlueMap[winRedCount];
}

// {type, balls, count}: IMockParams, { redBallArea, blueBallArea }: IResultParams
const handleCalcDoubleColorBallWinLevel = ({type, balls, count}: IMockParams, { redBallArea, blueBallArea }: IResultParams) => {
	const mockRedBallArea = balls.slice(0, -1);
	const mockBlueBallArea = balls[balls.length - 1];
	const mockParams = {
		redBallArea: mockRedBallArea,
		blueBallArea: mockBlueBallArea
	}
	const level = handleCalcDoubleColorBallLevel(mockParams, { redBallArea, blueBallArea });
	return {
		level,
		count
	}
};

const winLevelMap = {
	dobuleColorBallDetails: handleCalcDoubleColorBallWinLevel
};

export default function(mockParams: IMockParams, resultParams: IResultParams) {
  return winLevelMap[mockParams?.type]?.(mockParams, resultParams);
}

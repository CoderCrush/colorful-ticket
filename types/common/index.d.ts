/**
 * @description: 详情数据
 * @param {string} jcje 奖池金额
 * @param {string} kjjghq
 * @param {string} kjjgqq
 * @param {string} kjsj 开奖时间
 * @param {string} qgxsje 本期投注总额
 * @return {*}
 */
interface ILotteryDetail {
	jcje: string;
	kjjghq: string;
	kjjgqq: string;
	kjsj: string;
	qgxsje: string;
	qh: string;
	sjh: string;
	yjqbm: string | null;
}
/**
 * @description: 接口返的都是中文首字母命名
 * @param {*} qbqh
 * @param {*} zjxq
 * @return {*}
 */
interface ILotteryResult {
	qbqh: string;
	zjxq: Array<ILotteryDetail>;
}

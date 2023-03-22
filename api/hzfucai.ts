import request from './config/request';

export function getDoubleColorBallData(data?: Record<string, any>) {
	return request({
		url: '/hzfucai/chartstatic/json/kj_ssq.json?' + Math.random(),
		method: 'GET',
		data
	});
}

export function getHapplyEightData(data?: Record<string, any>) {
	return request({
		url: '/hzfucai/chartstatic/json/kj_kl8.json?' + Math.random(),
		method: 'GET',
		data
	});
}

export function getWelfareLottery3DData(data?: Record<string, any>) {
	return request({
		url: '/hzfucai/chartstatic/json/kj_3d.json?' + Math.random(),
		method: 'GET',
		data
	});
}

export function getSevenHappyData(data?: Record<string, any>) {
	return request({
		url: '/hzfucai/chartstatic/json/kj_qlc.json?' + Math.random(),
		method: 'GET',
		data
	});
}

export function getSixAddOneData(data?: Record<string, any>) {
	return request({
		url: '/hzfucai/chartstatic/json/kj_df6j1.json?' + Math.random(),
		method: 'GET',
		data
	});
}

export function get15x5Data(data?: Record<string, any>) {
	return request({
		url: '/hzfucai/chartstatic/json/kj_15x5.json?' + Math.random(),
		method: 'GET',
		data
	});
}

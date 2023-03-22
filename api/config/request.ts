import build from "./build"

interface Config {
	url: string
	method ? : 'GET' | 'POST' | 'PUT' | 'DELETE'
	data ? : unknown
	headers ? : Record < string, string >
}

export default async function(config: Config): Promise < unknown > {
	return new Promise((resolve, reject) => {
		uni.request({
			method: config.method,
			url: build(config.url),
			data: config.data,
			header: config.headers,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		});
	})
}

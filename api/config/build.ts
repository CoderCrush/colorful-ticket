const urlConfigData = {
	'/hzfucai': 'http://www.hzfucai.net'
}

const generatorUrl = (url: string) => {
	const r = Object.keys(urlConfigData).find(key => url.startsWith(key))
	if (r) return url.replace(r, urlConfigData[r]) 
}

export default function urlParser(sourceUrl) {
	let url = sourceUrl
	// #ifndef H5
	url = generatorUrl(url)
	// #endif
	return url;
}

import {
	defineConfig
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
	server: {
		proxy: {
			'/hzfucai': {
				target: 'http://www.hzfucai.net',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/hzfucai/, '')
			},
		}
	},
	plugins: [uni()],
});

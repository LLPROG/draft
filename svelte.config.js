import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: process.argv.includes('main') ? '' : process.env.BASE_PATH
		},
		alias: {
			'@components': path.resolve('./src/lib/components'),
			'@lib': path.resolve('./src/lib')
		}
	},
	preprocess: vitePreprocess()
};

export default config;

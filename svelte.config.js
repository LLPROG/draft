import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';

import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@components': resolve('./src/lib/components'),
			'@lib': resolve('./src/lib')
		}
	},
	preprocess: vitePreprocess()
};

export default config;

export const prerender = true;
export const trailingSlash = 'always';

// @ts-ignore
export function load({ url }) {
	return {
		url: url.pathname
	};
}

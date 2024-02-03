/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				green: '#3DBA6F',
				greenAccent: '#43BA8A',
				whitePrimary: '#EDEAEA',
				blackPrimary: '#34373A',
				grayPrimary: '#EBFFE5'
			},
			fontSize: {
				base: '18px',
				regular: '20px'
			}
		}
	},
	plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				green: '#3DBA6F',
				greenAccent: '#85E96C',
				whitePrimary: '#E0E7F1',
				blackPrimary: '#414540',
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

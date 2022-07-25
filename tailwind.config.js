/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {},

		screens: {
			'tablet': '768px',
			'desktop': '992px',
			'lgDesktop': '1200px',
		}
	},
	plugins: [],
}

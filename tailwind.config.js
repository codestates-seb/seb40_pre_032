/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'border-blue': 'hsl(205,41%,63%)',
				'button-blue': '#e0ecf3',
				'navy-100': '#3b589b',
				'navy-200': '#2b4175',
				'grayblack-100': '#2F3337',
				'grayblack-200': '#0b0d0d',
			},
		},
	},
	variants: {},
	plugins: [],
};

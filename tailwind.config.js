/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'border-blue': 'hsl(205,41%,63%)',
				'button-blue': '#e0ecf3',
			},
		},
		borderRadius: {
			little: '3px',
		},
	},
	variants: {},
	plugins: [],
};

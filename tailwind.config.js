/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'border-blue': 'hsl(205,41%,63%)',
				'button-blue': '#e0ecf3',
			},
			boxShadow: {
				'1top':
					'0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05)',
				sidebar:
					'0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05)',
			},
		},
		borderRadius: {
			little: '3px',
		},
	},
	variants: {},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: { max: '767px' },
			// => @media (min-width: 640px and max-width: 767px) { ... }

			md: { min: '768px', max: '1023px' },
			// => @media (min-width: 768px and max-width: 1023px) { ... }

			lg: { min: '1024px' },
			// => @media (min-width: 1024px and max-width: 1279px) { ... }

			// xl: { min: '1280px', max: '1535px' },
			// // => @media (min-width: 1280px and max-width: 1535px) { ... }

			// '2xl': { min: '1536px' },
			// // => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				'border-blue': 'hsl(205,41%,63%)',
				'button-blue': '#e0ecf3',
				'navy-100': '#3b589b',
				'navy-200': '#2b4175',
				'grayblack-100': '#2F3337',
				'grayblack-200': '#0b0d0d',
			},
			boxShadow: {
				'1top':
					'0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05)',
				sidebar:
					'0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05)',
			},
			flex: {
				test: '1 0 auto',
			},
		},
	},
	variants: {},
	plugins: [],
};

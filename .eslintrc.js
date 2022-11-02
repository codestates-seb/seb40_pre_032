module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:tailwindcss/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'tailwindcss'],
	rules: {
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['', '.js', '.jsx', '.gif'] },
		],
		'tailwindcss/classnames-order': 'warn',
		'tailwindcss/enforces-negative-arbitrary-values': 'warn',
		'tailwindcss/enforces-shorthand': 'warn',
		'tailwindcss/migration-from-tailwind-2': 'warn',
		'tailwindcss/no-arbitrary-value': 'off',
		'tailwindcss/no-custom-classname': 'warn',
		'tailwindcss/no-contradicting-classname': 'error',
		'react/function-component-definition': [
			2,
			{ namedcomponents: 'arrow-function' },
		],
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				labelAttributes: ['htmlFor'],
			},
		],
		'no-param-reassign': 0,
	},
};

module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react'],
	rules: {
		semi: 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'react/jsx-uses-vars': 'error',
		'react/jsx-uses-react': 'error',
	},
	ignorePatterns: ['*.config.js'],
};

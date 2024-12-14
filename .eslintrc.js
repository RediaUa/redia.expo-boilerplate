module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['simple-import-sort'],
	extends: [
		'universe/native',
		'universe/shared/typescript-analysis',
		'plugin:react-native-a11y/all',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			files: ['**/*.{ts,tsx}', '**/*.test.{ts,tsx}'],
			parserOptions: {
				project: './tsconfig.json',
			},
			rules: {
				semi: ['error', 'never'],
				quotes: ['error', 'single'],
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							// type imports
							['\\u0000$'],
							// packages: `react` and `expo` related packages come first
							['^react', 'react', 'expo', '^@?\\w'],
							// side effect imports
							['^\\u0000'],
							// $core imports
							['^\\$core'],
							// relative imports: parents, children, same-folder  `..` and `.` last
							['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
						],
					},
				],
				'simple-import-sort/exports': 'error',
				'sort-imports': 'off',
				'import/order': 'off',
			  'indent': ['error', 2],
    		'no-tabs': 'error',
    		'no-mixed-spaces-and-tabs': 'error'
			},
		},
		// test rules
		{
			files: ['**/*.test.{ts,tsx}'],
			plugins: ['jest'],
			extends: ['plugin:jest/recommended'],
			rules: { 'jest/prefer-expect-assertions': 'off' },
		},
	],
	ignorePatterns: ['node_modules/', 'ios/', 'android/', 'metro.config.js'],
}

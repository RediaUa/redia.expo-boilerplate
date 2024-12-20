module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['simple-import-sort', 'prefer-arrow'],
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'plugin:react-native-a11y/all',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
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
        'prefer-arrow/prefer-arrow-functions': [
          'warn',
          {
            disallowPrototype: true, // Prevent prototype methods
            singleReturnOnly: false, // Allow multi-line arrow functions
            classPropertiesAllowed: false, // Disallow arrow functions in class properties
          },
        ],
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
              // $app imports
              ['^\\$app'],
              // $core imports
              ['^\\$core'],
              // $ui imports
              ['^\\$ui'],
              // $navigation imports
              ['^\\$navigation'],
              // $utils imports
              ['^\\$utils'],
              // relative imports: parents, children, same-folder  `..` and `.` last
              ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ],
          },
        ],
        'simple-import-sort/exports': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        indent: ['error', 2],
        'no-tabs': 'error',
        'no-mixed-spaces-and-tabs': 'error',
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

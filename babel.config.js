module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./'],
          alias: {
            '@app/*': 'app/*',
            '@store/*': ['src/store/*'],
            '@core/*': 'src/core/*',
            '@native/*': 'src/native/*',
            '@ui/*': 'src/core/ui/*',
            '@navigation/*': ['src/core/navigation/*'],
            '@utils/*': ['src/core/utils/*'],
          },
        },
      ],
    ],
  }
}

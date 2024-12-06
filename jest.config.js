module.exports = {
    preset: 'jest-expo',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
      '^@core/(.*)$': '<rootDir>/src/core/$1'
    },
    transformIgnorePatterns: [
      'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)',
    ],
  };
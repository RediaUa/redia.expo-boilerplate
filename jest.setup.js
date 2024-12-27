import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

jest.mock('redux-persist', () => {
  const actual = jest.requireActual('redux-persist')
  return {
    ...actual,
    persistStore: jest.fn(() => ({
      purge: jest.fn(),
      pause: jest.fn(),
    })),
  }
})
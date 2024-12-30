import { fireEvent, renderRouter } from 'expo-router/testing-library'
import App from '@app/_layout'
import SignInScreen, { DEFAULT_CREDENTIALS } from '@app/(auth)/sign-in'
import HomeScreen from '@app/(main)/(tabs)/(homeTab)/home'
import Providers from '@tests/helpers/Providers'

import 'jest-styled-components'

test('show error in case of missing username', () => {
  const { getByText, getByTestId } = renderRouter(
    {
      index: App,
      '/sign-in': () => (
        <Providers>
          <SignInScreen />
        </Providers>
      ),
      '/home': () => (
        <Providers>
          <HomeScreen />
        </Providers>
      ),
    },
    {
      initialUrl: 'sign-in',
    },
  )

  const button = getByTestId('submit-btn')
  fireEvent.press(button)

  const error = getByText('Username is required')
  expect(error).toBeTruthy()
})

test('mocks input credentials and submits the form', () => {
  const { getByTestId, getPathname } = renderRouter(
    {
      index: App,
      '/sign-in': () => (
        <Providers>
          <SignInScreen />
        </Providers>
      ),
      '/home': () => (
        <Providers>
          <HomeScreen />
        </Providers>
      ),
    },
    {
      initialUrl: 'sign-in',
    },
  )

  fireEvent.changeText(getByTestId('username-input'), DEFAULT_CREDENTIALS.name)

  fireEvent.changeText(getByTestId('password-input'), DEFAULT_CREDENTIALS.password)

  fireEvent.press(getByTestId('submit-btn'))

  expect(getPathname()).toBe('/home')
})

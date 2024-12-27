import { fireEvent, renderRouter } from 'expo-router/testing-library'
import App from '@app/_layout'
import SignInScreen from '@app/(auth)/sign-in'
import HomeScreen from '@app/(main)/(tabs)/(homeTab)/home'
import Providers from '@tests/helpers/Providers'

import 'jest-styled-components'

test('navigates to main app correctly', () => {
  const { getByText, getPathname } = renderRouter(
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

  const button = getByText('Go to App')
  fireEvent.press(button)

  expect(getPathname()).toBe('/home')
})

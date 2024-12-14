import { render } from '@testing-library/react-native'

import 'jest-styled-components'

import App from '../App'

test('renders correctly', () => {
  const { getByText } = render(<App />)
  expect(getByText('Welcome!')).toBeTruthy()
})

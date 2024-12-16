import { render } from '@testing-library/react-native'
import App from '@app/index'

import 'jest-styled-components'

test('renders correctly', () => {
  const { getByText } = render(<App />)
  expect(getByText('Welcome!')).toBeTruthy()
})

import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { ScreenContainer } from '@core/ui/components/containers'
import Providers from '@tests/helpers/Providers'

import 'jest-styled-components'

describe('ScreenContainer', () => {
  it('renders correctly without scrollable', () => {
    const { getByText } = render(
      <Providers>
        <ScreenContainer scrollable={false}>
          <Text>Test Content</Text>
        </ScreenContainer>
        ,
      </Providers>,
    )

    expect(getByText('Test Content')).toBeTruthy()
  })

  it('renders correctly with scrollable', () => {
    const { getByText } = render(
      <Providers>
        <ScreenContainer scrollable>
          <Text>Test Content</Text>
        </ScreenContainer>
      </Providers>,
    )

    expect(getByText('Test Content')).toBeTruthy()
  })

  it('applies custom styles correctly', () => {
    const customStyle = { backgroundColor: 'red' }
    const { getByTestId } = render(
      <Providers>
        <ScreenContainer style={customStyle}>
          <Text>Test Content</Text>
        </ScreenContainer>
      </Providers>,
    )

    const container = getByTestId('screen-container')
    expect(container.props.style).toContainEqual(customStyle)
  })
})

import 'jest-styled-components'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native';
import { ScreenContainer } from '@core/ui/containers';

describe('ScreenContainer', () => {
    it('renders correctly without scrollable', () => {
        const { getByText } = render(
            <ScreenContainer scrollable={false}>
                <Text>Test Content</Text>
            </ScreenContainer>
        );

        expect(getByText('Test Content')).toBeTruthy();
    });

    it('renders correctly with scrollable', () => {
        const { getByText } = render(
            <ScreenContainer scrollable={true}>
                <Text>Test Content</Text>
            </ScreenContainer>
        );

        expect(getByText('Test Content')).toBeTruthy();
    });

    it('applies custom styles correctly', () => {
        const customStyle = { backgroundColor: 'red' };
        const { getByTestId } = render(
            <ScreenContainer style={customStyle}>
                <Text>Test Content</Text>
            </ScreenContainer>
        );

        const container = getByTestId('screen-container');
        expect(container.props.style).toContainEqual(customStyle);
    });
});
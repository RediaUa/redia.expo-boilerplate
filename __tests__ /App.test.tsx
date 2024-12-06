import 'jest-styled-components'
import { render } from '@testing-library/react-native';
import App from '../App';

test('renders correctly', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome!')).toBeTruthy();
});
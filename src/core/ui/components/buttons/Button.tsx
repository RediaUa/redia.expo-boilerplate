import { FC, memo } from 'react'
import { ButtonProps } from 'react-native'
import Text from '@ui/components/texts/Text'
import styled from 'styled-components/native'

interface Props extends ButtonProps {
  width?: number
}

const Button: FC<Props> = ({ onPress, title, ...rest }) => {
  return (
    <StyledButton onPress={onPress} {...rest}>
      <StyledText>{title}</StyledText>
    </StyledButton>
  )
}

const StyledButton = styled.TouchableOpacity<Omit<Props, 'title'>>`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.primaryDisabled : theme.colors.primary};
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  width: ${({ width }) => (width !== undefined ? `${width}px` : 'auto')};
`

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.buttons.text};
`

export default memo(Button)

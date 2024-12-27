import { FC } from 'react'
import { TextProps } from 'react-native'
import styled from 'styled-components/native'

interface Props extends TextProps {
  children: React.ReactNode
  fontSize?: number
}

const Text: FC<Props> = ({ children, fontSize, ...rest }) => {
  return (
    <ThemedText numberOfLines={1} fontSize={fontSize} ellipsizeMode='tail' {...rest}>
      {children}
    </ThemedText>
  )
}

const ThemedText = styled.Text<Pick<Props, 'fontSize'>>`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme, fontSize }) => fontSize ?? theme.fontSize.x4}px;
`

export default Text

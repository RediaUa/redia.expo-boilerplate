import { FC } from 'react'
import { TextProps } from 'react-native'
import styled from 'styled-components/native'

interface Props extends TextProps {
  children: React.ReactNode
  fontSize?: number
}

const Text: FC<Props> = ({ children, fontSize, ...rest }) => {
  return (
    <ThemedText
      numberOfLines={1}
      fontSize={fontSize}
      ellipsizeMode='tail'
      allowFontScaling={false}
      {...rest}>
      {children}
    </ThemedText>
  )
}

const ThemedText = styled.Text<Pick<Props, 'fontSize'>>`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme, fontSize }) => fontSize ?? theme.fontSize.x4}px;
  line-height: ${({ theme, fontSize }) =>
    fontSize ? getLineHeight(fontSize) : getLineHeight(theme.fontSize.x4)}px;
`

const getLineHeight = (fontSize: number, ratio: number = 1.25) => fontSize * ratio

export default Text

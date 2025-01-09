import { FC, memo } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Text from '@ui/components/texts/Text'
import styled from 'styled-components/native'

interface Props extends TouchableOpacityProps {
  title: string
}

const Link: FC<Props> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity accessibilityRole='button' {...rest}>
      <LinkText>{title}</LinkText>
    </TouchableOpacity>
  )
}

const LinkText = styled(Text)`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.primary};
`

export default memo(Link)

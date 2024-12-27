import { FC, ReactNode } from 'react'
import { ScrollView, ScrollViewProps, StyleProp, ViewStyle } from 'react-native'
// hooks
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
// types
type Props = ScrollViewProps & {
  children: ReactNode
  scrollable?: boolean
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
}

const ScreenContainer: FC<Props> = ({
  children,
  scrollable = true,
  style,
  contentContainerStyle,
  ...rest
}) => {
  const insets = useSafeAreaInsets()

  const content = (
    <Container testID='screen-container' style={style} {...insets}>
      {children}
      <StatusBar style='auto' />
    </Container>
  )

  if (scrollable) {
    return (
      <StyledScrollView contentContainerStyle={contentContainerStyle} {...rest}>
        {content}
      </StyledScrollView>
    )
  }

  return content
}

export default ScreenContainer

const StyledScrollView = styled(ScrollView).attrs<ScrollViewProps>(({ contentContainerStyle }) => ({
  contentContainerStyle: [{ flexGrow: 1 }, contentContainerStyle],
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.View<EdgeInsets>`
  flex: 1;
  padding: ${({ left, right, top }) => `${top}px ${left}px ${right}px`};
  align-items: center;
`

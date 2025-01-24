import { FC, ReactNode } from 'react'
import { ScrollView, ScrollViewProps, StyleProp, ViewStyle } from 'react-native'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

type Props = ScrollViewProps & {
  children: ReactNode
  scrollable?: boolean
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
}

const DEFAULT_INSETS = {
  top: 0,
  bottom: 16,
  left: 0,
  right: 0,
}

const ScreenContainer: FC<Props> = ({
  children,
  scrollable = true,
  style,
  contentContainerStyle,
  ...rest
}) => {
  /*
      React Navigation handles safe area in the default header
      if you're using a custom header, it's important to ensure your UI is within the safe area  
      https://reactnavigation.org/docs/handling-safe-area
  */
  const insets = useSafeAreaInsets()

  const content = (
    <Container testID='screen-container' style={style} {...(DEFAULT_INSETS || insets)}>
      {children}
      <StatusBar style='auto' />
    </Container>
  )

  if (scrollable) {
    return (
      <StyledScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={contentContainerStyle}
        {...rest}>
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
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`

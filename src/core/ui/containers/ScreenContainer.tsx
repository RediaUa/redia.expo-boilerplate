import { FC, ReactNode } from 'react';
import styled from 'styled-components/native';
import { ScrollView, ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// hooks
import { useSafeAreaInsets, EdgeInsets } from 'react-native-safe-area-context';
// types
type Props = ScrollViewProps & {
  children: ReactNode;
  scrollable?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const ScreenContainer: FC<Props> = ({
  children,
  scrollable = true,
  style,
  contentContainerStyle,
  ...rest
}) => {
  const insets = useSafeAreaInsets();

  const content = (
    <Container testID='screen-container' style={style} {...insets}>
      {children}
      <StatusBar style="auto" />
    </Container>
  );

  if (scrollable) {
    return (
      <StyledScrollView
        contentContainerStyle={contentContainerStyle}
        {...rest}
      >
        {content}
      </StyledScrollView>
    );
  }

  return content
}

export default ScreenContainer;

const StyledScrollView = styled(ScrollView).attrs<ScrollViewProps>(({ contentContainerStyle }) => ({
    contentContainerStyle: [{ flexGrow: 1 }, contentContainerStyle],
  }))`
    flex: 1;
  `;

const Container = styled.View<EdgeInsets>`
  flex: 1;
  padding: ${({ left, right, top }) => `${top}px ${left}px ${right}px`};
`;
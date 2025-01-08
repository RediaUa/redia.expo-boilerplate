import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react'
import {
  Animated,
  FlatList,
  LayoutChangeEvent,
  ListRenderItem,
  TouchableOpacity,
  ViewProps,
} from 'react-native'
import { SupportedLanguages } from '@core/i18n/constants'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setLanguage } from '@store/i18n'
import Text from '@ui/components/texts/Text'
import styled, { useTheme } from 'styled-components/native'

type LanguageOption = {
  value: SupportedLanguages
  emoji: string
}

interface Props {
  languages?: LanguageOption[]
}

const DEFAULT_LANGUAGES_OPTIONS: LanguageOption[] = [
  {
    value: SupportedLanguages.EN,
    emoji: '🇺🇸',
  },
  {
    value: SupportedLanguages.ES,
    emoji: '🇪🇸',
  },
  {
    value: SupportedLanguages.AR,
    emoji: '🇸🇦',
  },
  {
    value: SupportedLanguages.JA,
    emoji: '🇯🇵',
  },
  {
    value: SupportedLanguages.UK,
    emoji: '🇺🇦',
  },
]

const LanguageSelector: FC<Props> = ({ languages = DEFAULT_LANGUAGES_OPTIONS }) => {
  const [flatListWidth, setFlatListWidth] = useState(1)
  const [contentWidth, setContentWidth] = useState(2)

  const scrollIndicator = useRef(new Animated.Value(0)).current

  const theme = useTheme()

  const dispatch = useAppDispatch()
  const currentLanguage = useAppSelector((state) => state.i18n.language)

  const handleLanguagePress = useCallback(
    (language: SupportedLanguages) => () => {
      dispatch(setLanguage(language))
    },
    [dispatch],
  )

  const handleKeyExtractor = useCallback((item: LanguageOption) => item.value, [])
  const handleRenderItem: ListRenderItem<LanguageOption> = useCallback(
    ({ item }) => {
      return (
        <LanguageItem
          onPress={handleLanguagePress(item.value)}
          isSelected={currentLanguage === item.value}>
          <Text fontSize={48}>{item.emoji}</Text>
        </LanguageItem>
      )
    },
    [currentLanguage, handleLanguagePress],
  )
  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setFlatListWidth(event.nativeEvent.layout.width)
  }, [])

  const handleContentSize = useCallback((width: number) => {
    setContentWidth(width)
  }, [])

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollIndicator } } }],
    {
      useNativeDriver: true,
    },
  )

  const scrollbarWidth = useMemo(
    () =>
      contentWidth > flatListWidth ? (flatListWidth / contentWidth) * flatListWidth : flatListWidth,
    [flatListWidth, contentWidth],
  )

  const scrollRange = contentWidth - flatListWidth
  const thumbMovementRange = flatListWidth - scrollbarWidth

  const translateX = scrollIndicator.interpolate({
    inputRange: [0, scrollRange],
    outputRange: [0, thumbMovementRange],
    extrapolate: 'clamp',
  })

  const isScrollBarVisible = contentWidth > flatListWidth

  return (
    <>
      <StyledFlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={languages}
        keyExtractor={handleKeyExtractor}
        renderItem={handleRenderItem}
        onScroll={handleScroll}
        onLayout={handleLayout}
        onContentSizeChange={handleContentSize}
        scrollEventThrottle={8}
      />
      {isScrollBarVisible && (
        <ScrollTrack>
          <ScrollIndicator
            // force rerender component if theme is changed as animated view is memomized under the hood
            key={theme.colors.primary}
            width={scrollbarWidth}
            // set offset here as styled component does not support animated values
            style={{ transform: [{ translateX: translateX || 1 }] }}
          />
        </ScrollTrack>
      )}
    </>
  )
}

export default memo(LanguageSelector)

const ScrollTrack = styled.View`
  width: 100%;
`

const ScrollIndicator = styled(Animated.View)<{
  width: number & ViewProps
}>`
  width: ${({ width }) => width}px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`

const StyledFlatList = Animated.createAnimatedComponent(styled(FlatList<LanguageOption>).attrs({
  contentContainerStyle: {
    height: 80,
    paddingBottom: 16,
  },
})`
  flex-grow: 0;
`)

const LanguageItem = styled(TouchableOpacity).attrs({
  hitSlop: 4,
})<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border-radius: 25%;
  margin: 0 16px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primaryFocused : theme.colors.background};
`

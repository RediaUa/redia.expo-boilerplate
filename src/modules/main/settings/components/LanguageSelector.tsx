import React, { FC, memo, useCallback } from 'react'
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native'
import { SupportedLanguages } from '@core/i18n/constants'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setLanguage } from '@store/i18n'
import Text from '@ui/components/texts/Text'
import styled from 'styled-components/native'

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
    value: SupportedLanguages.UK,
    emoji: '🇺🇦',
  },
]

const LanguageSelector: FC<Props> = ({ languages = DEFAULT_LANGUAGES_OPTIONS }) => {
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
    ({ item }) => (
      <LanguageItem
        onPress={handleLanguagePress(item.value)}
        isSelected={currentLanguage === item.value}>
        <Text fontSize={48}>{item.emoji}</Text>
      </LanguageItem>
    ),
    [currentLanguage, handleLanguagePress],
  )

  return (
    <StyledFlatList
      horizontal
      data={languages}
      keyExtractor={handleKeyExtractor}
      renderItem={handleRenderItem}
    />
  )
}

export default memo(LanguageSelector)

const StyledFlatList = styled(FlatList<LanguageOption>).attrs({
  contentContainerStyle: {
    height: 80,
    paddingBottom: 16,
  },
})`
  flex-grow: 0;
`

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

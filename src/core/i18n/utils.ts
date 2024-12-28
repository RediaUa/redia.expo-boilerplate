import * as Localization from 'expo-localization'

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES_ARRAY, SupportedLanguages } from './constants'

export const isSupportedLanguage = (lang: string): lang is SupportedLanguages => {
  return SUPPORTED_LANGUAGES_ARRAY.includes(lang as SupportedLanguages)
}

export const getCurrentLanguage = (): SupportedLanguages => {
  // these are returned in the order the user defines in their device settings
  // hence choose the first one
  const currentOSLanguage = Localization.getLocales()[0]?.languageCode

  if (currentOSLanguage && isSupportedLanguage(currentOSLanguage)) {
    return currentOSLanguage
  }

  return DEFAULT_LANGUAGE
}

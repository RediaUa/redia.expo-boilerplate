import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import translationEn from './locales/en.json'
import translationUa from './locales/uk.json'
import { DEFAULT_LANGUAGE } from './constants'
import { getCurrentLanguage } from './utils'

const resources = {
  [DEFAULT_LANGUAGE]: { translation: translationEn },
  uk: { translation: translationUa },
}

const initI18n = () => {
  const lng = getCurrentLanguage()

  return i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    resources,
    lng,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  })
}

initI18n()

export default i18n

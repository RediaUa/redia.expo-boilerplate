import { FC, ReactNode, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@core/i18n'
import { useAppSelector } from '@store/hooks'

interface Props {
  children: ReactNode
}

const I18nProvider: FC<Props> = ({ children }) => {
  const language = useAppSelector((state) => state.i18n.language)

  useEffect(() => {
    const changeLanguage = async () => {
      try {
        await i18n.changeLanguage(language)
      } catch (error) {
        console.warn('[I18nProvider.changeLanguage]:', error)
      }
    }

    changeLanguage()
  }, [language])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export default I18nProvider

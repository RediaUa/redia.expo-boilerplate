import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'expo-router'
import { SupportedLanguages } from '@core/i18n/constants'
import Button from '@core/ui/components/buttons/Button'
import { ScreenContainer } from '@core/ui/components/containers'
import Toggle from '@core/ui/components/toggles/Toggle'
import { logout } from '@store/auth'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setLanguage } from '@store/i18n'
import { persistor } from '@store/index'
import { setThemeMode } from '@store/theme'
import Text from '@ui/components/texts/Text'

const SettingsScreen = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const mode = useAppSelector((state) => state.theme.mode)
  const language = useAppSelector((state) => state.i18n.language)

  const isDarkTheme = mode === 'dark'
  const isUkrainian = language === SupportedLanguages.UK

  const handleBtnPress = async () => {
    try {
      dispatch(logout())
      await persistor.purge()
      router.replace('/sign-in')
    } catch (e) {
      console.log('[SettingsScreen.handleBtnPress]: ', e)
    }
  }

  const handleThemeTogglePress = useCallback(
    async (value: boolean) => {
      const theme = value ? 'dark' : 'light'
      dispatch(setThemeMode(theme))
    },
    [dispatch],
  )

  const handleLanguageTogglePress = useCallback(
    async (value: boolean) => {
      const language = value ? SupportedLanguages.UK : SupportedLanguages.EN
      dispatch(setLanguage(language))
    },
    [dispatch],
  )

  return (
    <ScreenContainer>
      <Text>{t('settings.actions.switchTheme')}</Text>
      <Toggle onValueChange={handleThemeTogglePress} isOn={isDarkTheme} />
      <Text>{'\n'}</Text>
      <Text>{t('settings.actions.switchLanguage')}</Text>
      <Toggle onValueChange={handleLanguageTogglePress} isOn={isUkrainian} />
      <Text>{'\n'}</Text>
      <Button width={100} title={t('settings.actions.logOut')} onPress={handleBtnPress} />
    </ScreenContainer>
  )
}

export default SettingsScreen

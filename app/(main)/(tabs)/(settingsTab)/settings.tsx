import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'expo-router'
import Button from '@core/ui/components/buttons/Button'
import { ScreenContainer } from '@core/ui/components/containers'
import Toggle from '@core/ui/components/toggles/Toggle'
import LanguageSelector from '@modules/main/settings/components/LanguageSelector'
import { logout } from '@store/auth'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { persistor } from '@store/index'
import { setThemeMode } from '@store/theme'
import Text from '@ui/components/texts/Text'
import styled from 'styled-components/native'

const SettingsScreen = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const mode = useAppSelector((state) => state.theme.mode)
  const isDarkTheme = mode === 'dark'

  const handleBtnPress = useCallback(async () => {
    try {
      dispatch(logout())
      await persistor.purge()
      router.replace('/sign-in')
    } catch (e) {
      console.log('[SettingsScreen.handleBtnPress]: ', e)
    }
  }, [dispatch, router])

  const handleThemeTogglePress = useCallback(
    async (value: boolean) => {
      const theme = value ? 'dark' : 'light'
      dispatch(setThemeMode(theme))
    },
    [dispatch],
  )

  return (
    <ScreenContainer>
      <StyledText>{t('settings.actions.switchTheme')}</StyledText>
      <Toggle onValueChange={handleThemeTogglePress} isOn={isDarkTheme} />
      <StyledText>{t('settings.actions.switchLanguage')}</StyledText>
      <LanguageSelector />
      <Text>{'\n'}</Text>
      <Button width={140} title={t('settings.actions.logOut')} onPress={handleBtnPress} />
    </ScreenContainer>
  )
}

const StyledText = styled(Text)`
  margin: 8px 0;
`

export default SettingsScreen

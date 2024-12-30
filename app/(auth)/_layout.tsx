import { useTranslation } from 'react-i18next'
import { Stack } from 'expo-router'
import { getDefaultStackOptions } from '@navigation/constants'
import { useTheme } from 'styled-components/native'

const AuthStack = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Stack screenOptions={getDefaultStackOptions({ theme })}>
      <Stack.Screen name='sign-in' options={{ headerTitle: t('auth.navigation.signIn') }} />
    </Stack>
  )
}

export default AuthStack

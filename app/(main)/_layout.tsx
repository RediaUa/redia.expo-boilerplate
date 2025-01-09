import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Stack, useRouter } from 'expo-router'
import { getDefaultModalOptions } from '@navigation/constants'
import { useAppSelector } from '@store/hooks'
import { useTheme } from 'styled-components/native'

const MainStack = () => {
  const router = useRouter()
  const theme = useTheme()
  const { t } = useTranslation()
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
    // protected main app stack
    // redirect to sign-in if not authenticated
    if (!isAuthenticated) {
      router.replace({
        pathname: '/sign-in',
      })
    }
  }, [isAuthenticated, router])

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(tabs)' />
      <Stack.Screen
        name='modals/contact'
        options={{
          ...getDefaultModalOptions({ router, theme }),
          headerTitle: t('home.modals.contact.header'),
        }}
      />
    </Stack>
  )
}

export default MainStack

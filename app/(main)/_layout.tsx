import { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { useAppSelector } from '@store/hooks'

const MainStack = () => {
  const router = useRouter()
  const isAuthenticated = useAppSelector((store) => store.auth.isAuthenticated)

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
    </Stack>
  )
}

export default MainStack

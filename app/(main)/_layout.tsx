import { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { defaultStackOptions } from '@navigation/constants'

const IS_AUTHENTICATED = true

const MainStack = () => {
  const router = useRouter()

  useEffect(() => {
    // protected main app stack
    // redirect to sign-in if not authenticated
    if (!IS_AUTHENTICATED) {
      router.replace({
        pathname: '/sign-in',
      })
    }
  }, [router])

  return (
    <Stack screenOptions={defaultStackOptions}>
      <Stack.Screen name='(tabs)' />
    </Stack>
  )
}

export default MainStack

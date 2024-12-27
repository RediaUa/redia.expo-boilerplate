import { Stack } from 'expo-router'
import { getDefaultStackOptions } from '@navigation/constants'
import { useTheme } from 'styled-components/native'

const AuthStack = () => {
  const theme = useTheme()

  return (
    <Stack screenOptions={getDefaultStackOptions({ theme })}>
      <Stack.Screen name='sign-in' options={{ headerTitle: 'Sign in' }} />
    </Stack>
  )
}

export default AuthStack

import { Stack } from 'expo-router'

const AuthStack = () => {
  return (
    <Stack screenOptions={{ title: 'Sign in' }}>
      <Stack.Screen name='sign-in' />
    </Stack>
  )
}

export default AuthStack

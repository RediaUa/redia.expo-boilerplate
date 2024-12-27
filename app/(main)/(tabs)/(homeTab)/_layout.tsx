import { Stack } from 'expo-router'

const HomeTabStack = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' />
    </Stack>
  )
}

export default HomeTabStack

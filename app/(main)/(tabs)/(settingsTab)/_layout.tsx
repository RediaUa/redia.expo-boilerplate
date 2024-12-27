import { Stack } from 'expo-router'

const SettingsTabStack = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='settings' />
    </Stack>
  )
}

export default SettingsTabStack

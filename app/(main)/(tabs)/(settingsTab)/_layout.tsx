import { Stack } from 'expo-router'
import { defaultStackOptions } from '@navigation/constants'

const SettingsTabStack = () => {
  return (
    <Stack screenOptions={defaultStackOptions}>
      <Stack.Screen name='settings' />
    </Stack>
  )
}

export default SettingsTabStack

import { Stack } from 'expo-router'
import { defaultStackOptions } from '@navigation/constants'

const HomeTabStack = () => {
  return (
    <Stack screenOptions={defaultStackOptions}>
      <Stack.Screen name='home' />
    </Stack>
  )
}

export default HomeTabStack

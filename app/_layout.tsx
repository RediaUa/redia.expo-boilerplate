import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Slot } from 'expo-router'

/*
    The root layout of the application.
    This is a place to wrap all kind of global providers.
*/

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  )
}

export default RootLayout

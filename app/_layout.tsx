import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Slot } from 'expo-router'
import store, { persistor } from '@store/index'
import { ThemeContextProvider } from '@ui/theme/context'

/*
    The root layout of the application.
    This is a place to wrap all kind of global providers.
*/

const RootLayout = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <ThemeContextProvider>
            <Slot />
          </ThemeContextProvider>
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default RootLayout

import { useEffect, useState } from 'react'
import { Redirect } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useAppSelector } from '@store/hooks'
import { wait } from '@utils/timers'

/*
    Application entry point.
    This is a place to load everything you need before opening the initial screen.
*/

SplashScreen.preventAutoHideAsync().catch(console.warn)

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false)
  const isAuthenticated = useAppSelector((store) => store.auth.isAuthenticated)

  useEffect(() => {
    const prepareApp = async () => {
      try {
        // load everything you need before opening the app
        setAppIsReady(true)
      } catch (e) {
        console.warn(`[prepareApp]: ${e}`)
      } finally {
        await wait(300)
        // hide the splash screen once the redirected route's screen is mounted to avoid flickering
        // alternative you can hide a splash screen directly in the redirected route
        SplashScreen.hideAsync().catch(console.warn)
      }
    }

    prepareApp()
  }, [])

  if (appIsReady) {
    // define the intial screen
    return <Redirect href={isAuthenticated ? '/home' : '/sign-in'} />
  }

  return null
}

export default App

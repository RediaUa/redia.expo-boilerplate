import { FC, ReactNode } from 'react'
import { useAppSelector } from '@store/hooks'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from './contants'

interface Props {
  children: ReactNode
}

export const ThemeContextProvider: FC<Props> = ({ children }) => {
  const mode = useAppSelector((state) => state.theme.mode)
  const theme = mode === 'light' ? lightTheme : darkTheme

  // uncomment this block if you want to sync theme with system appearance
  /*
  const dispatch = useAppDispatch()
  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        // sync theme if it's changed in the background
        const currentMode = Appearance.getColorScheme()
        if (currentMode) {
          dispatch(setThemeMode(currentMode))
        }
      }
    }

    const subscription = AppState.addEventListener('change', handleAppStateChange)

    return () => {
      subscription.remove()
    }
  }, [dispatch]) 
  */

  return <StyledThemeProvider theme={{ ...theme }}>{children}</StyledThemeProvider>
}

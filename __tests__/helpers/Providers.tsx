import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import store from '@store/index'
import { lightTheme } from '@ui/theme/contants'
import { ThemeProvider } from 'styled-components/native'

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </Provider>
  )
}

export default Providers

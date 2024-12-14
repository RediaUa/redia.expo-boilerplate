import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScreenContainer } from '@core/ui/containers'

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenContainer>
        <Text>Welcome!</Text>
      </ScreenContainer>
    </SafeAreaProvider>
  )
}

import { Button } from 'react-native'
import { useRouter } from 'expo-router'
import { ScreenContainer } from '@core/ui/containers'

const SettingsScreen = () => {
  const router = useRouter()

  return (
    <ScreenContainer>
      <Button
        title='Log out'
        onPress={() => {
          router.replace('/sign-in')
        }}
      />
    </ScreenContainer>
  )
}

export default SettingsScreen

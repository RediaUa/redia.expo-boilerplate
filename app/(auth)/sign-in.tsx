import { Button } from 'react-native'
import { useRouter } from 'expo-router'
import { ScreenContainer } from '@core/ui/components/containers'

const SignInScreen = () => {
  const router = useRouter()

  return (
    <ScreenContainer>
      <Button
        title='Go to App'
        onPress={() => {
          router.navigate('/home')
        }}
      />
    </ScreenContainer>
  )
}

export default SignInScreen

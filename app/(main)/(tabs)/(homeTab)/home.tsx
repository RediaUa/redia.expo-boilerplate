import { useTranslation } from 'react-i18next'
import { useRouter } from 'expo-router'
import { ScreenContainer } from '@core/ui/components/containers'
import { useAppSelector } from '@store/hooks'
import Button from '@ui/components/buttons/Button'
import Text from '@ui/components/texts/Text'

const HomeScreen = () => {
  const router = useRouter()
  const user = useAppSelector((state) => state.auth.user)
  const { t } = useTranslation()

  return (
    <ScreenContainer>
      <Text>
        {t('home.text.welcome')} {user?.name},
      </Text>
      <Text>{'\n'}</Text>
      <Text>{t('home.text.description')}</Text>
      <Text>{'\n'}</Text>
      <Button
        title={t('home.text.contactMe')}
        onPress={() => {
          router.navigate('/modals/contact')
        }}
      />
    </ScreenContainer>
  )
}

export default HomeScreen

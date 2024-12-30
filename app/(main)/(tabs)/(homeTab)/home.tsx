import { useTranslation } from 'react-i18next'
import { ScreenContainer } from '@core/ui/components/containers'
import { useAppSelector } from '@store/hooks'
import Text from '@ui/components/texts/Text'

const HomeScreen = () => {
  const user = useAppSelector((state) => state.auth.user)
  const { t } = useTranslation()

  return (
    <ScreenContainer>
      <Text>
        {t('home.text.welcome')} {user?.name}, {'\n'}
      </Text>
      <Text>{t('home.text.description')}</Text>
    </ScreenContainer>
  )
}

export default HomeScreen

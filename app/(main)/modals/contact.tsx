import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert } from 'react-native'
import * as Clipboard from 'expo-clipboard'
import * as Linking from 'expo-linking'
import Link from '@ui/components/buttons/Link'
import ScreenContainer from '@ui/components/containers/ScreenContainer'
import Text from '@ui/components/texts/Text'

const TELEGRAM_LINK = 'https://t.me/artem_redia'
const LINKED_IN_LINK = 'https://www.linkedin.com/in/artem-redia/'

const ContactModal = () => {
  const { t } = useTranslation()

  const handlePress = (link: string) => async () => {
    try {
      const supported = await Linking.canOpenURL(link)
      if (supported) {
        await Linking.openURL(link)
      } else {
        Alert.alert(t('common.error'), t('home.modals.contact.copy.errorMessage'))
      }
    } catch (e) {
      console.log('[ContactModal.handlePress]: ', e)
    }
  }

  const handleLongPress = (link: string) => async () => {
    try {
      await Clipboard.setStringAsync(link)
      Alert.alert(
        t('home.modals.contact.copy.message'),
        t('home.modals.contact.copy.successMessage'),
      )
    } catch (e) {
      console.log('[ContactModal.handleLongPress]: ', e)
    }
  }

  return (
    <ScreenContainer>
      <Link
        title={t('home.modals.contact.linkedIn')}
        onPress={handlePress(LINKED_IN_LINK)}
        onLongPress={handleLongPress(LINKED_IN_LINK)}
      />
      <Link
        title={t('home.modals.contact.telegram')}
        onPress={handlePress(TELEGRAM_LINK)}
        onLongPress={handleLongPress(TELEGRAM_LINK)}
      />
      <Text>{'\n'}</Text>
      <Text numberOfLines={2} cursive>
        {t('home.modals.contact.hint')}
      </Text>
    </ScreenContainer>
  )
}

export default memo(ContactModal)

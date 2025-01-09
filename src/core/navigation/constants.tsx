import { TouchableOpacity } from 'react-native'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Router } from 'expo-router'
import { Theme } from '@ui/theme/types'
import { isIos } from '@utils/platform'

type InitialOptions = {
  theme: Theme
}

export const getDefaultStackOptions = ({ theme }: InitialOptions): NativeStackNavigationOptions => {
  return {
    headerShown: true,
    headerStyle: { backgroundColor: theme.colors.background },
    headerTintColor: theme.colors.text,
  }
}

export const getDefaultTabsOptions = ({ theme }: InitialOptions): BottomTabNavigationOptions => {
  return {
    headerStyle: { backgroundColor: theme.colors.background },
    headerTintColor: theme.colors.text,
    tabBarStyle: { backgroundColor: theme.colors.background },
    tabBarActiveTintColor: theme.colors.primary,
    tabBarIconStyle: {
      minHeight: 28,
    },
  }
}

export const getDefaultModalOptions = ({
  theme,
  router,
}: InitialOptions & { router: Router }): NativeStackNavigationOptions => {
  return {
    headerShown: true,
    headerStyle: { backgroundColor: theme.colors.background },
    headerTitleAlign: 'center',
    headerTintColor: theme.colors.text,
    presentation: 'modal',
    animation: 'slide_from_bottom',
    headerRight: () =>
      isIos ? (
        <TouchableOpacity accessibilityRole='button' onPress={router.back}>
          <FontAwesome name='close' size={24} color={theme.colors.text} />
        </TouchableOpacity>
      ) : undefined,
  }
}

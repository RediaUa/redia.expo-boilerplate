import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Theme } from '@ui/theme/types'

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

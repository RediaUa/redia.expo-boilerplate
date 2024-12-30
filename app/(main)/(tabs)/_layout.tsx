import { useTranslation } from 'react-i18next'
import { Tabs } from 'expo-router'
import TabBarIcon from '@core/ui/components/tabs/navigation/TabBarIcon'
import { getDefaultTabsOptions } from '@navigation/constants'
import { useTheme } from 'styled-components/native'

const TabsStack = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Tabs screenOptions={getDefaultTabsOptions({ theme })}>
      <Tabs.Screen
        name='(homeTab)'
        options={{
          title: t('home.navigation.tabs.tab1'),
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        }}
      />
      <Tabs.Screen
        name='(settingsTab)'
        options={{
          title: t('home.navigation.tabs.tab2'),
          tabBarIcon: ({ color }) => <TabBarIcon name='cog' color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsStack

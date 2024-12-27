import { Tabs } from 'expo-router'
import TabBarIcon from '@core/ui/components/tabs/navigation/TabBarIcon'
import { getDefaultTabsOptions } from '@navigation/constants'
import { useTheme } from 'styled-components/native'

const TabsStack = () => {
  const theme = useTheme()

  return (
    <Tabs screenOptions={getDefaultTabsOptions({ theme })}>
      <Tabs.Screen
        name='(homeTab)'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        }}
      />
      <Tabs.Screen
        name='(settingsTab)'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name='cog' color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsStack

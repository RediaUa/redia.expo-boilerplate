import { Tabs } from 'expo-router'
import TabBarIcon from '@ui/tabs/navigation/TabBarIcon'

const TabsStack = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}>
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

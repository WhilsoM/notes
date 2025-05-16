import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import { AccountIcon } from '@/assets/icons/UI/AccountIcon'
import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: 'light',
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						position: 'absolute',
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name='house.fill' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='bio'
				options={{
					title: 'bio',
					tabBarIcon: () => <AccountIcon color='white' size={25} />,
				}}
			/>
		</Tabs>
	)
}

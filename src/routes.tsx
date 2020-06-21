import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Fontisto,
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { Platform } from 'react-native'

import Home from './pages/Home'
import Transfer from './pages/Transfer'
import Pay from './pages/Pay'
import Settings from './pages/Settings'

const Tab = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#00a3e0',
        }}
      >
        <Tab.Screen
          name="RESUMO"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="format-list-bulleted-square"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="TRANSFERIR"
          component={Transfer}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="arrow-swap" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="MAIS"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5
                name="plus-circle"
                color={color}
                size={Platform.OS === 'ios' ? 34 : 50}
              />
            ),
          }}
        />

        <Tab.Screen
          name="PAGAR"
          component={Pay}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="account-balance-wallet"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="MENU"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="menu" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes

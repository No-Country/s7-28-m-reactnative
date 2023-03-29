import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

// screens

import HomeScreen from './screens/HomeScreen'
import ContactsScreen from './screens/ContactsScreen'
import HowToUseScreen from './screens/HowToUseScreen'
import ProfileScreen from './screens/ProfileScreen'

const Tab = createBottomTabNavigator()

function MyTabs ({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName='Inicio'
      backBehavior='Inicio'
      screenOptions={{
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: '#4994C2'
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name='Inicio' component={HomeScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons
                  name='home'
                  size={30}
                  color={color}
                />
              )
            }
          }}
        />

        <Tab.Screen
          name='Contactos' component={ContactsScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons
                  name='people'
                  size={30}
                  color={color}
                />
              )
            }
          }}
        />
        <Tab.Screen
          name='Como lo uso' component={HowToUseScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons
                  name='help-circle-outline'
                  size={30}
                  color={color}
                />
              )
            }
          }}
        />
        <Tab.Screen
          name='Perfil' component={ProfileScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons
                  name='person-circle-outline'
                  size={30}
                  color={color}
                />
              )
            }
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  )
}
export default MyTabs

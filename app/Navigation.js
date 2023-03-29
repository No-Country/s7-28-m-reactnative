import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'

//screens

import HomeScreen from './screens/HomeScreen'
import HowToUseScreen from './screens/HowToUseScreen'
import NotificationsScreen from './screens/NotificationsScreen'
import ProfileScreen from './screens/ProfileScreen'
import ContactsScreen from './screens/ContactsScreen'

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={HomeScreen} options={{
                headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="home-outline"
                            size={24}
                            color="red"
                        />
                    )
                }
            }} />
            <Tab.Screen name="Contactos" component={ContactsScreen} options={{
                headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="people-circle-outline"
                            size={30}
                            color="red"
                        />
                    )
                }
            }} />
            <Tab.Screen name="Perfil" component={ProfileScreen} options={{
                headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="person-circle-outline"
                            size={30}
                            color="red"
                        />
                    )
                }
            }} />
            <Tab.Screen name="Notificaciónes" component={NotificationsScreen} options={{
                headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="mail-unread-outline"
                            size={24}
                            color="red"
                        />
                    )
                }
            }} />
            <Tab.Screen name="Como lo uso" component={HowToUseScreen} options={{
                headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="help-outline"
                            size={24}
                            color="red"
                        />
                    )
                }
            }} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
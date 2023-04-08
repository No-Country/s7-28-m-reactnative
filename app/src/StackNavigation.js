import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import RegisterSucces from './screens/RegisterSuccess'
import BottomNav from './BottomNav'
import Slider from './components/Slider'
import ListUsers from './components/contact/ListUsers'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='presentation' component={Slider} options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='login' component={LoginScreen} options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='register' component={RegisterScreen} options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='registersuccess' component={RegisterSucces} options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='bottom'
          component={BottomNav}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='newContact'
          component={ListUsers}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

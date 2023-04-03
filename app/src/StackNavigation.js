import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import RegisterSucces from './screens/RegisterSuccess'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
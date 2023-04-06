import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import RegisterSuccess from './src/screens/RegisterSuccess'
import BottomNav from './src/BottomNav'
import PersonalInfoScreen from './src/screens/PersonalInfoScreen'
import FaQScreen from './src/screens/FaQScreen'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='login'
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='register'
          component={RegisterScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='registersuccess'
          component={RegisterSuccess}
          options={{
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
          name='personalinfoscreen'
          component={PersonalInfoScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='frequentasked'
          component={FaQScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

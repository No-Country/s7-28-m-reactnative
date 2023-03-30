import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'

const Login = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-appwhite '>
      <View className='flex flex-row justify-center mb-5 mt-5'>
        <Image
          source={require('../../assets/logo.png')}
          className='w-50 p-4'
        />
      </View>
      <View className='bg-appgray rounded-3xl'>
        <Text className='text-center m-5 font-bold text-lg'>¡Bienvenido a tu alerta diaria!</Text>
        <TextInput placeholder='Ingresa tu email' className='bg-applightgray border-appblue rounded-md mx-4 mt-4 mb-4 p-4 ' />
        <TextInput placeholder='Ingresa tu contraseña' secureTextEntry className='bg-applightgray border border-appblue rounded-md mx-4 mt-3 mb-3 p-4 ' />
        <Text className='text-center mt-4 mb-3'>¿Olvidaste tu contraseña?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('bottom') }} className='bg-appblue mx-8 mt-4 mb-4 p-4 rounded-md justify-center items-center'>
          <Text className='text-xl font-base  text-appwhite'> Inciar sesión </Text>
        </TouchableOpacity>
      </View>
      <View className='mt-5'>
        <TouchableOpacity onPress={() => { Alert.alert('inicio de sesión!') }} className='bg-appgray mx-8 mt-5 p-4 rounded-md flex-row justify-evenly items-center'>
          <Ionicons
            name='logo-google'
            size={30}
          />
          <Text className='text-lg '>Continuar con Google</Text>
        </TouchableOpacity>
        <Text className='text-center mt-3'>¿No tenes Cuenta?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('register') }} className='bg-appred mx-8 mt-5 mb-10 p-4 rounded-md justify-center items-center'>
          <Text className='text-xl font-base text-appwhite'>Regístrarte</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login

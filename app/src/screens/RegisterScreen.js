import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const Register = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-appwhite'>
      <View className='flex flex-row justify-center mt-5'>
        <Image
          source={require('../../assets/logo.png')}
          className='w-50 p-4 mb-6 mt-5'
        />
      </View>
      <View>
        <Text className='text-center m-5 font-bold text-lg'>Ingresá tus datos</Text>
        <TextInput placeholder='Ingresa tu email' className='bg-applightgray border border-appblue rounded-md mx-4 mt-4 mb-4 p-4 ' />
        <TextInput placeholder='Ingrsa tu numero de teléfono' className='bg-applightgray border-appblue border rounded-md mx-4 mt-4 mb-4 p-4 ' />
        <TextInput placeholder='Ingresa tu contraseña' secureTextEntry className='bg-applightgray border border-appblue rounded-md mx-4 mt-3 mb-3 p-4 ' />
      </View>
      <View className='mt-5'>
        <TouchableOpacity onPress={() => { navigation.navigate('registersuccess') }} className='bg-appblue mx-8 mb-60 p-4 rounded-md justify-center items-center'>
          <Text className='text-xl font-base  text-appwhite'>Regístrarte</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Register

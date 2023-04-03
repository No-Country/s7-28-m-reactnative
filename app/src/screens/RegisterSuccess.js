import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const RegisterSuccess = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView className='bg-appwhite'>
        <View className='flex flex-row justify-center mt-5'>
          <Image
            source={require('../../assets/logo.png')}
            className='w-50 p-4 mb-6 mt-5'
          />
        </View>
        <View>
          <Text className='text-center m-5 font-bold text-lg'>¡Registró exitoso!</Text>
          <View className='flex-row justify-center'>
            <Image
              source={require('../../assets/amico.png')}
              className='mt-10 mb-10'
            />
          </View>
        </View>
        <View className='mt-5'>
          <TouchableOpacity onPress={() => { navigation.navigate('login') }} className='bg-appblue mx-8  mb-20 p-4 rounded-md justify-center items-center'>
            <Text className='text-xl font-base  text-appwhite'>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default RegisterSuccess

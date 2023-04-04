import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const SliderScreen = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-appwhite'>
      <View className='flex flex-row justify-center mt-5'>
        <Image
          source={require('../../assets/logo.png')}
          className='w-50 p-4 mb-6 mt-5'
        />
      </View>
      <View>
        <Text className='text-center m-5 font-bold text-lg'>Nuestra app te ayuda <Text className='font-normal'>a infórmarle a tus contactos tu estado, para que estén siempre alertas.</Text></Text>
        <View className='flex-row justify-center'>
          <Image
            source='item.description'
            className='mt-10 mb-10'
            resizeMode='contain'
          />
        </View>
      </View>
      <View>
        <Text className='text-center m-5 font-normal text-lg'>Ante cualquier <Text className='font-bold'>accidente o evento inesperado</Text> contaras con nosotros para avisar a tus contactos</Text>
        <View className='flex-row justify-center'>
          <Image
            source='item.description'
            className='mt-10 mb-10'
            resizeMode='contain'
          />
        </View>
      </View>
      <View>
        <Text className='text-center m-5 font-normal text-lg'>También podrás avisar si <Text className='font-bold'>llegaste bien</Text> con solo un boton sin necesidad de mandar mensajes.</Text>
        <View className='flex-row justify-center'>
          <Image
            source='item.description'
            className='mt-10 mb-10'
            resizeMode='contain'
          />
        </View>
      </View>
      <View className='mt-5'>
        <TouchableOpacity onPress={() => { navigation.navigate('login') }} className='bg-appblue mx-8  mb-20 p-4 rounded-md justify-center items-center'>
          <Text className='text-xl font-base  text-appwhite'>Omitir</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SliderScreen

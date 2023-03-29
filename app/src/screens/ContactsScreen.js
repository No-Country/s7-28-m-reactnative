import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'

const ContactsScreen = () => {
  return (
    <SafeAreaView>
      {/* Header */}
      <View className='flex flex-row justify-center mt-5 mb-5'>
        <Image
          source={require('../../assets/logo.png')}
          className='w-50 p-4'
        />
      </View>

      <View className='items-center'>
        <View>
          <Text className='mt-20 text-xl font-semibold'>
            Agregar Contactos
          </Text>
        </View>
        <TouchableOpacity onPress={() => { Alert.alert('Agregar Contacto!') }} className='bg-gray-200 rounded-full border border-4 border-appgreen p-5 m-5 mt-20 h-60 w-60 justify-center items-center'>
          <Ionicons
            name='add-outline'
            size={100}
            color='#72B040'
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ContactsScreen

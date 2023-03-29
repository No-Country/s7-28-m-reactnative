import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

const ProfileScreen = () => {
  const [menu, setMenu] = useState(false)
  return (
    <SafeAreaView>
      {/* Header */}
      <View className='flex flex-row justify-between px-7 items-center mt-5 w-full h-16 bg-appwhite shadow-2xl z-10'>
        <Ionicons name='arrow-back' size={24} color='black' />
        <Text className='text-lg'>Perfil</Text>
        <TouchableOpacity onPress={() => setMenu((prev) => !prev)}>
          <Ionicons name='ellipsis-vertical' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <View className='relative z-50'>
        {menu && <View className='absolute right-0 w-3/4 bg-appwhite flex items-start space-y-5 py-5 pl-5'>
          <TouchableOpacity>
            <Text>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Agregar Contacto</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cerrar Sesion</Text>
          </TouchableOpacity>
        </View>}
      </View>
      <View className='bg-applightblue w-full h-80 flex flex-row justify-center items-center shadow-lg shadow-appblue'>
        <View className='w-full flex justify-center items-center'>
          <Image
            source={require('../images/avatar.png')}
            className='mb-5'
            alt=''
          />
          <Text className='font-bold text-xl'>Mariana Romero</Text>
        </View>
      </View>
      <View className='mt-10 flex flex-col px-8'>
        <View className='flex flex-row w-full border-b pb-5 mb-5 space-x-2'>
          <Text className='font-semibold text-lg'>Email </Text>
          <Text className='text-lg font-light'>somemail@gmail.com</Text>
        </View>
        <View className='flex flex-row w-full border-b pb-5 mb-5 space-x-2'>
          <Text className='font-semibold text-lg'>Telefono </Text>
          <Text className='text-lg font-light'>+54 11 91547861</Text>
        </View>
        <View className='flex flex-row w-full border-b pb-5 mb-5'>
          <Text className='font-semibold text-lg'>Cambiar Contraseña</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

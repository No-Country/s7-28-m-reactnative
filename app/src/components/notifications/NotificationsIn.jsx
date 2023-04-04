import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

function NotificationsIn () {
  return (
    <View className='flex  w-full px-5 py-2 '>
      <Text className='pb-2 text-sm'>Hoy 13:30</Text>
      <View className='flex-row bg-appgray  rounded-lg border-b-2 border-appblue'>
        <View className=' flex m-3 bg-appwhite w-20 h-20 rounded-full justify-center items-center'>
          <Ionicons className='' name='person' size={60} color='#4994C2' />
        </View>
        <View>
          <View className='my-3'>
            <Text className='text-appred text-base font-semibold'>¡Martin está en peligro!</Text>
          </View>
          <View className='flex-row mt-2'>
            <View className='flex-row mr-2'>
              <Ionicons name='call' size={21} color='#C83D3D' />
              <Text className='ml-1'>Llamar al 911</Text>
            </View>
            <View className='flex-row'>
              <Ionicons name='map' size={21} color='#4994C2' />
              <Text className='ml-1'>Ver ubicación</Text>
            </View>
          </View>
        </View>
      </View>

      <Text className='pb-2 text-sm'>Viernes 19/03 a las 23:50hs</Text>
      <View className='flex-row bg-appgray  rounded-lg border-b-2 border-appblue'>
        <View className=' flex m-3 bg-appwhite w-20 h-20 rounded-full justify-center items-center'>
          <Ionicons className='' name='person' size={60} color='#4994C2' />
        </View>
        <View>
          <View className='my-2'>
            <Text className='text-appgreen text-base font-semibold'>¡Martin llegó bien!</Text>
            <Text className='text-appblack text-sm font-semibold'>Enviale un mensaje</Text>
          </View>
          <View className='flex-row mt-2'>
            <View className='flex-row mr-2'>
              <Text>¡Que bueno!</Text>
            </View>
            <Text> | </Text>
            <View className='flex-row'>
              <Text className='ml-1'>¡Nos Vemos pronto!</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default NotificationsIn

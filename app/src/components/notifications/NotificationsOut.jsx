import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

function NotificationsOut () {
  return (
    <View className='flex  w-full px-5 py-2 '>
      <Text className='pb-2 text-sm'>Hoy 13:30</Text>
      <View className='flex-row bg-appgray  rounded-lg border-b-2 border-appblue pl-2 py-1 mb-4'>
        <View>
          <View>
            <Text className='text-appred text-base font-semibold my-2'>¡Martin está en peligro!</Text>
            <Text className='text-appblack text-sm font-semibold w-60 p'>Tus contactos han sido informados    La ayuda va en camino</Text>
          </View>
          <View className='flex-row mt-2'>
            <View className='flex-row mr-2'>
              <Ionicons name='call' size={21} color='#C83D3D' />
              <Text className='ml-1'>Llamar al 911</Text>
            </View>
          </View>
        </View>
      </View>

      <Text className='pb-2 text-sm'>Viernes 19/03 a las 23:50hs</Text>
      <View className='flex-row bg-appgray  rounded-lg border-b-2 border-appblue mb-4'>
        <View>

          <Text className='text-appgreen text-base font-semibold my-3 pl-2 w-56'>Tus contactos ya saben que llegaste bien</Text>

        </View>
      </View>
    </View>
  )
}

export default NotificationsOut

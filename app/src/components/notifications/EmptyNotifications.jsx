import React from 'react'
import { View, Text, Image } from 'react-native'
import emptyAlert from '../../../assets/empty_alert.png'

function EmptyNotifications () {
  return (
    <View className=' w-full flex'>
      <View>
        <Text className='text-center pt-9 pb-3 text-xl font-bold '>Aún no tienes notificaciones</Text>
      </View>
      <View>
        <Image className=' w-screen h-[350]' source={emptyAlert} />
      </View>
    </View>
  )
}

export default EmptyNotifications

import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, TouchableOpacity, View } from 'react-native'
import EmptyNotifications from '../components/notifications/EmptyNotifications'
import NotificationsIn from '../components/notifications/NotificationsIn'
import NotificationsOut from '../components/notifications/NotificationsOut'

const NotificationsScreen = () => {
  const [active, setActive] = useState(1)
  const [user] = useState({
    notificaion1: null,
    notificaion2: null

  })
  return (
    <SafeAreaView>
      <View className='w-full h-16 z-10 bg-appwhite shadow-xl shadow-appblack border-b-2 border-appgray justify-center'>
        <Text className='text-center justify-center text-sm '>Notificaciones</Text>
      </View>
      <View className='w-full h-16 p-0 -mt-1 z-0 bg-appbluelight flex flex-row columns-2 justify-evenly'>
        <TouchableOpacity onPress={() => setActive(1)} className={`justify-center w-40 border-b-2 ${active !== 1 ? ' border-appbluelight' : ' border-appblue'}`}>
          <View className='flex'>
            <Text className={`font-normal text-center ${active !== 1 ? 'text-[#8D8E92]' : ''}`}>Recibidos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive(2)} className={`justify-center w-40 border-b-2 ${active !== 2 ? ' border-appbluelight' : ' border-appblue'}`}>
          <View className='flex'>
            <Text className={`font-normal text-center ${active !== 2 ? 'text-[#8D8E92]' : ''} `}>Enviados</Text>
          </View>
        </TouchableOpacity>
      </View>
      {active === 1 && user.notificaion1 ? <NotificationsIn /> : active === 2 && user.notificaion2 ? <NotificationsOut /> : <EmptyNotifications />}
    </SafeAreaView>
  )
}

export default NotificationsScreen

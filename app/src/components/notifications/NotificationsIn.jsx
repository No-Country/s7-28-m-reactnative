import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import EmptyNotifications from './EmptyNotifications'

function NotificationsIn () {
  const [isLoading, setIsLoading] = React.useState(false)
  const [info, setInfo] = React.useState([])

  const handleGetToken = async () => {
    await AsyncStorage.getItem('AccessToken')
      .then(function (response) {
        receiveAlert(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  React.useEffect(() => {
    handleGetToken()
  }, [])

  const call = () => {
    Linking.openURL('tel:911')
  }

  const openMap = (ubication) => {
    const url = ubication
    Linking.openURL(url)
  }
  const receiveAlert = async (token) => {
    setIsLoading(true)
    await axios.get(BASE_URL + 'alerts/user/receivedalerts', { headers: { authorization: 'Bearer ' + token } })
      .then(function (response) {
        if (response.status === 200) {
          setInfo(response.data.data)
        }
      })
      .catch(function (error) {
        console.log(error)
      }).finally(() => { setIsLoading(false) })
  }
  if (isLoading) {
    return (
      <View className='items-center justify-center mt-60'>
        <Text className='text-lg'>Cargando...</Text>
      </View>
    )
  }
  if (!info.length) {
    return (<EmptyNotifications />)
  }
  return (
    <View className='flex  w-full h-auto px-5 py-2'>
      {info.map((item, i) => {
        if (item.reason === 'Esta en peligro!') {
          console.log(item)
          return (
            <View key={i}>
              <Text className='pb-2 text-sm'>{item.time?.day} {item.time?.date} a las {item.time?.hour}</Text>
              <View className='flex-row bg-appgray  rounded-lg border-b-2 border-appblue pl-2 py-1 mb-4'>
                <View>
                  <View>
                    <Text className='text-appred text-base font-semibold my-2'>{item.userId.username} {item.reason}</Text>
                  </View>
                  <View className='flex-row mt-2'>
                    <TouchableOpacity className='flex-row mr-2' onPress={() => { call() }}>
                      <Ionicons name='call' size={21} color='#C83D3D' />
                      <Text className='ml-1'>Llamar al 911</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { openMap(item.ubication) }} className='flex-row'>
                      <Ionicons name='map' size={21} color='#4994C2' />
                      <Text className='ml-1'>Ver ubicación</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )
        } else if (item.reason === 'Llegue bien!') {
          return (
            <View key={i}>
              <Text className='pb-2 text-sm'>{item.time?.day} {item.time?.date} a las {item.time?.hour}</Text>
              <View className='flex-row bg-appgray  rounded-lg border-b-2 border-appblue mb-4'>
                <View>
                  <Text className='text-appgreen text-base font-semibold my-3 pl-2 w-56'>Tus contactos ya saben que llegaste bien</Text>
                </View>
              </View>
            </View>
          )
        }
        return (
          <View key={i} />
        )
      })}
    </View>
  )
}

export default NotificationsIn

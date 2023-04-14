import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { View, Text } from 'react-native'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

function NotificationsIn () {
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

  const receiveAlert = async (token) => {
    await axios.get(BASE_URL + 'alerts/user/receivedalerts', { headers: { authorization: 'Bearer ' + token } })
      .then(function (response) {
        if (response.status === 200) {
          setInfo(response.data.data)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <View className='flex  w-full h-auto px-5 py-2'>
      {info.map((item, i) => {
        if (item.reason === 'Ayuda Estoy en peligro!') {
          return (
            <View key={i}>
              <Text className='pb-2 text-sm'>{item.time?.day} {item.time?.date} a las {item.time?.hour}</Text>
              <View className='flex-row bg-appgray  rounded-lg border-b-2 border-appblue pl-2 py-1 mb-4'>
                <View>
                  <View>
                    <Text className='text-appred text-base font-semibold my-2'>{item.reason}</Text>
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

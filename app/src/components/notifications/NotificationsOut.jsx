import * as React from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

function NotificationsOut () {
  const [info, setInfo] = React.useState([])

  const handleGetToken = async () => {
    await AsyncStorage.getItem('AccessToken')
      .then(function (response) {
        senAlert(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  React.useEffect(() => {
    handleGetToken()
  }, [])

  const senAlert = async (token) => {
    await axios.get(BASE_URL + 'alerts/user/sendalerts', { headers: { authorization: 'Bearer ' + token } })
      .then(function (response) {
        console.log(response)
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
                    <Text className='text-appblack text-sm font-semibold w-60 p'>Tus contactos han sido informados, La ayuda va en camino.</Text>
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

export default NotificationsOut

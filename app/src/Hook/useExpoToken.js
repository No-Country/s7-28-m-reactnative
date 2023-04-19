import * as React from 'react'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useExpoToken = () => {
  const [token, setToken] = React.useState()
  const [expoToken, setExpoToken] = React.useState('')

  const handleGetToken = async () => {
    const token = await AsyncStorage.getItem('AccessToken')
  }

  const handleExpoToken = async () => {
    await AsyncStorage.getItem('ExpoToken')
      .then(function (response) {
        setExpoToken(response)
        handlePushExpoToken(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  React.useEffect(() => {
    handleGetToken()
  }, [])

  const handlePushExpoToken = async (response) => {
    const data = { expoToken: response }
    const token = await AsyncStorage.getItem('AccessToken')
    await axios.patch(BASE_URL + 'users', data, { headers: { authorization: 'Bearer ' + token } })
      .then(function (response) {
        console.log(response)
        if (response.status === 201) {
          console.log(response)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return { handleExpoToken }
}

export default useExpoToken

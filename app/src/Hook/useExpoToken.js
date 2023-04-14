import * as React from 'react'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useExpoToken = () => {
  const [token, setToken] = React.useState()
  const [expoToken, setExpoToken] = React.useState('')

  const handleGetToken = async () => {
    await AsyncStorage.getItem('AccessToken')
      .then(function (response) {
        setToken(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleExpoToken = async () => {
    await AsyncStorage.getItem('ExpoToken')
      .then(function (response) {
        setExpoToken(response)
        console.log({ response })
        handlePushExpoToken()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  React.useEffect(() => {
    handleGetToken()
  }, [])

  const handlePushExpoToken = async () => {
    const data = () => {
      return (
        {
          expoToken
        }
      )
    }
    await axios.put(BASE_URL + 'users', data(), { headers: { authorization: 'Bearer ' + token } })
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

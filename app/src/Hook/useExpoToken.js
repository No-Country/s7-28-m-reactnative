import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useExpoToken = () => {
  const handleExpoToken = async () => {
    await AsyncStorage.getItem('ExpoToken')
      .then(function (response) {
        handlePushExpoToken(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handlePushExpoToken = async (response) => {
    const data = { expoToken: response }
    const token = await AsyncStorage.getItem('AccessToken')
    await axios.patch(BASE_URL + 'users', data, { headers: { authorization: 'Bearer ' + token } })
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
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

import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useExpoToken = (token) => {
  // handlePushExpoToken(response)
  AsyncStorage.getItem('AccessToken').then(res => {
    axios.patch(BASE_URL + 'users', { expoToken: token }, { headers: { authorization: 'Bearer ' + res } }).then(function (response) {
      console.log(response)
      if (response.status === 200) {
        console.log(response)
      }
    })
      .catch(function (error) {
        console.log(error)
      })
  })
}

export default useExpoToken

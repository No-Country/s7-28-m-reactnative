import * as React from 'react'
import * as Location from 'expo-location'
import HomeScreen from '../../screens/HomeScreen'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

const Home = ({ navigation }) => {
  const [token, setToken] = React.useState()

  const handleGetToken = async () => {
    await AsyncStorage.getItem('AccessToken')
      .then(function (response) {
        setToken(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  React.useEffect(() => {
    handleGetToken()
  }, [])

  const getPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.log('Por favor, conceda permisos de ubicacion')
      return
    }
    const currentLocation = await Location.getCurrentPositionAsync({})
    const url = `https://www.google.com/maps/search/?api=1&query=${currentLocation.coords.latitude},${currentLocation.coords.longitude}`
    return (url)
  }

  const showToastOK = () => {
    Toast.show({
      type: 'success',
      text1: '¡Tu alerta fue enviada con éxito!'
    })
  }

  const onSubmit = async () => {
    const url = await getPermissions()
    const data = () => {
      return (
        {
          ubication: url,
          reason: 'Ayuda Estoy en peligro!'
        }
      )
    }
    await axios.post(BASE_URL + 'alerts', data(), { headers: { authorization: 'Bearer ' + token } })
      .then(function (response) {
        console.log(response)
        if (response.status === 201) {
          showToastOK()
          console.log(response)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const ReachNotificaionToastOK = () => {
    Toast.show({
      type: 'success',
      text1: '¡Tu alerta fue enviada con éxito!'
    })
  }

  const handlereachgodalert = async () => {
    const url = await getPermissions()
    const data = () => {
      return (
        {
          ubication: url,
          reason: 'Llegue bien!'
        }
      )
    }
    await axios.post(BASE_URL + 'alerts', data(), { headers: { authorization: 'Bearer ' + token } })
      .then(function (response) {
        console.log(response)
        if (response.status === 201) {
          console.log(response)
          ReachNotificaionToastOK()
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <HomeScreen onSubmit={onSubmit} handlereachgodalert={handlereachgodalert} />
  )
}

export default Home

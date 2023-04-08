import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'
import Spinner from 'react-native-loading-spinner-overlay'
import Ionicons from '@expo/vector-icons/Ionicons'

const ListUsers = ({ route }) => {
  const [token, setToken] = useState('')
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  const startLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  useEffect(() => {
    startLoading()
    const handleGetToken = async () => {
      const dataToken = await AsyncStorage.getItem('AccessToken')
      if (dataToken) {
        setToken(dataToken)
      } else {
        console.log('No existe el token')
      }
    }

    handleGetToken()
  }, [token])

  const showToastOK = () => {
    Toast.show({
      type: 'success',
      text1: 'Usuario agregado con éxito'
    })
  }

  const showToastNO = () => {
    Toast.show({
      type: 'error',
      text1: 'El usuario ya está agregado'
    })
  }

  const addNewContact = (id) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    axios.post(BASE_URL + 'users/contacts', {
      newContactId: id
    }, config)
      .then(function (response) {
        console.log('USUARIO AGREGADO')
        if (response.status === 201) {
          showToastOK()
          navigation.goBack()
        }
      })
      .catch(function (error) {
        showToastNO()
        console.log(error.response.data)
      })
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View className='flex justify-center items-center mt-6 mb-3'>
          <Text className='text-lg font-semibold'>Elije que contacto quieres agregar</Text>
        </View>
        {loading
          ? (
            <Spinner
              visible={loading}
              textContent='Cargando contactos...'
            />
            )
          : route.params?.data?.length > 1
            ? (
                route.params?.data.map((c) => (
                  <View key={c.lookupKey} className='rounded-lg px-3 py-1'>
                    <View className='flex flex-row items-center justify-around py-6 bg-appbluelight rounded-lg border' key={c.lookupKey}>
                      <View>
                        <Ionicons
                          name='person-circle-outline'
                          size={40}
                        />
                      </View>
                      <View className='flex flex-row items-center gap-x-4 w-32'>
                        <Text className='text-base'>{c.firstName}</Text>
                      </View>
                      <View>
                        <TouchableOpacity onPress={() => addNewContact(c.lookupKey)}>
                          <Text className='text-base'>Agregar contacto</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))
              )
            : (
              <View className='flex justify-center items-center'>
                <Text className='text-lg'>No hay contactos</Text>
              </View>
              )}
      </ScrollView>
    </SafeAreaView>

  )
}

export default ListUsers

import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'

const ListUsers = () => {
  const [token, setToken] = useState('')
  const [contactsSearched, setContactsSearched] = useState('')
  const [text, onChangeText] = React.useState('')
  const navigation = useNavigation()

  useEffect(() => {
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

  const showToastSearchFailed = () => {
    Toast.show({
      type: 'error',
      text1: 'No se encontró el usuario'
    })
  }

  const searchContact = (text) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    axios.get(BASE_URL + `users/search/${text}`, config)
      .then(function (response) {
        if (response.data?.length > 0) {
          setContactsSearched(response.data)
        } else {
          showToastSearchFailed()
        }
      })
      .catch(function (error) {
        showToastSearchFailed()
        console.log(error.response.data)
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
          <Text className='text-lg font-semibold'>Busca el contacto que quieres agregar</Text>
        </View>
        <View className='flex flex-row justify-center items-center mt-3'>
          <View>
            <TextInput
              className='px-6 py-3 rounded-l-md border-l border-t border-b'
              onChangeText={onChangeText}
              value={text}
              placeholder='Email del usuario'
              keyboardType='default'
            />
          </View>
          <View className='bg-appblue px-4 py-4 rounded-r-md border-r border-t border-b'>
            <TouchableOpacity onPress={() => searchContact(text)}>
              <Text>Buscar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {contactsSearched
          ? (
            <View className='mt-6'>
              {contactsSearched?.map((c) => (
                <View key={c._id} className='rounded-lg px-3 py-1'>
                  <View className='flex flex-row items-center justify-between px-4 py-6 bg-appbluelight rounded-lg border' key={c.lookupKey}>
                    <View className='flex flex-row gap-x-2'>
                      <View>
                        {c?.profileImage
                          ? (
                            <Image
                              style={{
                                width: 50,
                                height: 50,
                                resizeMode: 'cover'
                              }}
                              className='rounded-full'
                              source={{
                                uri: c.profileImage?.url
                              }}
                            />
                            )
                          : (
                            <Ionicons
                              name='person-circle-outline'
                              size={40}
                            />
                            )}
                      </View>
                      <View className='flex flex-row items-center gap-x-4'>
                        <Text className='text-base'>{c.email}</Text>
                      </View>
                    </View>
                    <View className='p-2 bg-appdarkgrey rounded-lg'>
                      <TouchableOpacity onPress={() => addNewContact(c._id)}>
                        <Text className='text-base'>Agregar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            )
          : (
            <View className='flex justify-center items-center mt-20'>
              <Text className='text-lg font-semibold'>No hay contactos</Text>
            </View>
            )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ListUsers

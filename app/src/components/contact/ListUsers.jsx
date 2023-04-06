import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

const ListUsers = () => {
  const [token, setToken] = useState('')
  const [allUsers, setAllUsers] = useState('')
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

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    function fetchUsers () {
      fetch(BASE_URL + 'users/all', config)
        .then((response) => response.json())
        .then((data) => {
          setAllUsers(data)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    handleGetToken()
    fetchUsers()
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
        <View className='flex justify-center items-center mt-6'>
          <Text className='text-lg font-semibold'>Elije que contacto quieres agregar</Text>
        </View>
        {allUsers
          ? (
            <View className='px-5 gap-y-5 py-6'>
              <View className='flex flex-row items-center justify-around py-2 bg-appbluelight rounded-lg' key={allUsers[3]?.id}>
                <View className='flex flex-row items-center gap-x-4'>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      resizeMode: 'cover'
                    }}
                    className='rounded-full'
                    source={{
                      uri: allUsers[3]?.profileImage?.url
                    }}
                  />
                  <Text className='text-base'>{allUsers[3]?.firstName}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => addNewContact(allUsers[3]?._id)}>
                    <Text className='text-base'>Agregar contacto</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='flex flex-row items-center justify-around py-2 bg-appbluelight rounded-lg' key={allUsers[3]?.id}>
                <View className='flex flex-row items-center gap-x-4'>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      resizeMode: 'cover'
                    }}
                    className='rounded-full'
                    source={{
                      uri: allUsers[4]?.profileImage?.url
                    }}
                  />
                  <Text className='text-base'>{allUsers[4]?.firstName}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => addNewContact(allUsers[4]?._id)}>
                    <Text className='text-base'>Agregar contacto</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='flex flex-row items-center justify-around py-2 bg-appbluelight rounded-lg' key={allUsers[3]?.id}>
                <View className='flex flex-row items-center gap-x-4'>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      resizeMode: 'cover'
                    }}
                    className='rounded-full'
                    source={{
                      uri: allUsers[5]?.profileImage?.url
                    }}
                  />
                  <Text className='text-base'>{allUsers[5]?.firstName}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => addNewContact(allUsers[5]?._id)}>
                    <Text className='text-base'>Agregar contacto</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='flex flex-row items-center justify-around py-2 bg-appbluelight rounded-lg' key={allUsers[3]?.id}>
                <View className='flex flex-row items-center gap-x-4'>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      resizeMode: 'cover'
                    }}
                    className='rounded-full'
                    source={{
                      uri: allUsers[6]?.profileImage?.url
                    }}
                  />
                  <Text className='text-base'>{allUsers[6]?.firstName}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => addNewContact(allUsers[6]?._id)}>
                    <Text className='text-base'>Agregar contacto</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='flex flex-row items-center justify-around py-2 bg-appbluelight rounded-lg' key={allUsers[3]?.id}>
                <View className='flex flex-row items-center gap-x-4'>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      resizeMode: 'cover'
                    }}
                    className='rounded-full'
                    source={{
                      uri: allUsers[7]?.profileImage?.url
                    }}
                  />
                  <Text className='text-base'>{allUsers[7]?.firstName}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => addNewContact(allUsers[7]?._id)}>
                    <Text className='text-base'>Agregar contacto</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='flex flex-row items-center justify-around py-2 bg-appbluelight rounded-lg' key={allUsers[3]?.id}>
                <View className='flex flex-row items-center gap-x-4'>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      resizeMode: 'cover'
                    }}
                    className='rounded-full'
                    source={{
                      uri: allUsers[8]?.profileImage?.url
                    }}
                  />
                  <Text className='text-base'>{allUsers[8]?.firstName}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => addNewContact(allUsers[8]?._id)}>
                    <Text className='text-base'>Agregar contacto</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='flex flex-row items-center justify-around py-2 bg-appbluelight rounded-lg' key={allUsers[3]?.id}>
                <View className='flex flex-row items-center gap-x-4'>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      resizeMode: 'cover'
                    }}
                    className='rounded-full'
                    source={{
                      uri: allUsers[8]?.profileImage?.url
                    }}
                  />
                  <Text className='text-base'>{allUsers[9]?.firstName}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => addNewContact(allUsers[9]?._id)}>
                    <Text className='text-base'>Agregar contacto</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='flex flex-row items-center justify-around py-2 bg-appbluelight rounded-lg' key={allUsers[3]?.id}>
                <View className='flex flex-row items-center gap-x-4'>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      resizeMode: 'cover'
                    }}
                    className='rounded-full'
                    source={{
                      uri: allUsers[10]?.profileImage?.url
                    }}
                  />
                  <Text className='text-base'>{allUsers[10]?.firstName}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => addNewContact(allUsers[10]?._id)}>
                    <Text className='text-base'>Agregar contacto</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='flex flex-row items-center justify-around py-2 bg-appbluelight rounded-lg' key={allUsers[3]?.id}>
                <View className='flex flex-row items-center gap-x-4'>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      resizeMode: 'cover'
                    }}
                    className='rounded-full'
                    source={{
                      uri: allUsers[11]?.profileImage?.url
                    }}
                  />
                  <Text className='text-base'>{allUsers[11]?.firstName}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => addNewContact(allUsers[11]?._id)}>
                    <Text className='text-base'>Agregar contacto</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            )
          : (
            <View className='flex justify-center items-center mt-24'>
              <Text className='text-xl'>Cargando...</Text>
            </View>
            )}
      </ScrollView>
    </SafeAreaView>

  )
}

export default ListUsers

import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { BASE_URL } from '@env'
import { useFocusEffect } from '@react-navigation/native'

const ProfileScreen = ({ navigation }) => {
  const [allDataUser, setAllDataUser] = useState('')
  const [Modal, SetModal] = useState(false)

  const handleRemoveToken = async () => {
    await AsyncStorage.getItem('AccessToken')
      .then(function (response) {
        axios.patch(BASE_URL + 'users', { expoToken: '' }, { headers: { authorization: 'Bearer ' + response } })
          .then(() => {
            AsyncStorage.removeItem('AccessToken')
            navigation.navigate('login')
          }
          )
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useFocusEffect(
    React.useCallback(() => {
      const handleGetToken = async () => {
        const dataToken = await AsyncStorage.getItem('AccessToken')
        if (dataToken) {
          const config = {
            headers: { Authorization: `Bearer ${dataToken}` }
          }

          axios.get(BASE_URL + 'users', config)
            .then(function (response) {
              if (response.status === 200) {
                setAllDataUser(response.data)
              }
            })
            .catch(function (error) {
              console.log(error.response.data)
            })
        } else {
          console.log('No existe el token')
        }
      }

      handleGetToken()
    }, [allDataUser.profileImage])
  )

  return (
    <SafeAreaView>
      {Modal && <View className='w-full z-50 h-screen flex items-center justify-center bg-appblack bg-opacity-20 absolute top-0'>
        <View className=' w-100 p-5 z-50 rounded-3xl mx-5 bg-appgray flex items-center justify-between'>
          <View className='mb-2 '>
            <Image className='rounded-full' source={require('../../images/Character.png')} />
          </View>
          <View className='flex items-center pb-6'>
            <Text className='text-xl font-semibold'>Cerrar Sesion</Text>
            <Text className='font-light pt-1'>Â¿De verdad quieres cerrar sesion?</Text>
          </View>
          <View className='flex flex-row gap-4 w-full justify-end'>
            <TouchableOpacity><Text className='px-2 bg-appwhite rounded-md py-1' onPress={() => SetModal(false)}>Cancelar</Text></TouchableOpacity>
            <TouchableOpacity><Text className='px-2 bg-appwhite rounded-md py-1' onPress={handleRemoveToken}>Entendido</Text></TouchableOpacity>
          </View>
        </View>
      </View>}

      {/* Header */}

      <View className='h-16 bg-applightgray flex justify-center'>
        <Text className='w-full text-lg text-center'>Mi Perfil</Text>
      </View>
      <View className=' w-full flex items-center'>
        <View className='w-32 h-32 flex rounded-full overflow-hidden'>
          {allDataUser?.profileImage?.url
            ? (
              <Image
                style={{
                  width: 130,
                  height: 130,
                  resizeMode: 'cover'
                }}
                source={{
                  uri: allDataUser.profileImage?.url
                }}
              />
              )
            : (
              <View className='flex justify-center items-center'>
                <Ionicons
                  name='person-circle-outline'
                  size={130}
                />
              </View>
              )}
        </View>

        <Text className='text-xl font-bold mt-4'>{allDataUser.username}</Text>
        <Text className='mt-2 text-appblack'>{allDataUser.email}</Text>
      </View>
      <View className='w-full flex items-start pl-10 mt-10'>
        <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo', allDataUser)} className='h-20 flex flex-row items-center gap-5 border-b w-full border-appbluelight'>
          <Ionicons
            name='person-circle-outline'
            size={30}
            color='#4994C2'
          />
          <Text className='text-lg'>Datos Personales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HowToUse')} className='h-20 flex flex-row items-center gap-5 border-b w-full border-appbluelight'
        >
          <Ionicons
            name='help-circle'
            size={30}
            color='#4994C2'
          />
          <Text className='text-lg'>Como se usa Always Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FaqScreen')} className=' flex flex-row items-center gap-5 h-20 border-b w-full border-appbluelight'>
          <Ionicons
            name='help-buoy'
            size={30}
            color='#4994C2'
          />
          <Text className='text-lg'>Preguntas Frecuentes</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className='w-full px-5 mt-40'>
        <Button
          title='Cerrar Sesion'
          color='#C83D3D'
          onPress={() => SetModal(true)}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProfileScreen
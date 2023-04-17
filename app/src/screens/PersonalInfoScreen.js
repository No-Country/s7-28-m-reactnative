import { View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker'
import Toast from 'react-native-toast-message'

const PersonalInfoScreen = ({ navigation, route }) => {
  const [token, setToken] = useState('')
  const [InputName, SetInputName] = useState('')
  const [InputTelefono, SetInputTelefono] = useState('')
  const [InputContraseña, SetInputContraseña] = useState('')
  const [image, setImage] = useState(route?.params?.profileImage?.url)

  const formData = {
    username: InputName || route?.params?.username,
    phoneNumber: InputTelefono || route?.params?.phoneNumber,
    password: InputContraseña || undefined
  }

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
      text1: 'Perfil actualizado con éxito'
    })
  }

  const showToastNO = () => {
    Toast.show({
      type: 'error',
      text1: 'Ocurrió un error, intente de nuevo'
    })
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [10, 10],
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const updateImage = () => {
    const profileImage = new FormData()
    profileImage.append('profileImage', {
      uri: image,
      name: 'profileImage.png',
      type: 'image/png'
    })

    fetch('https://alwaysalert.onrender.com/users/profileImage', {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      },
      body: profileImage
    }).then((response) => {
      if (response.status === 200) {
        console.log(response)
      }
    })
  }

  const updateUserProfile = () => {
    console.log(InputContraseña)
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    axios.patch(BASE_URL + 'users', formData, config)
      .then(function (response) {
        if (response.status === 200) {
          updateImage()
          showToastOK()
          navigation.navigate('Perfil')
        }
      })
      .catch(function (error) {
        showToastNO()
        console.log(error.response.data)
      })
  }

  return (
    <SafeAreaView>
      <View className='w-full flex items-center h-72 justify-center bg-appbluelight'>
        <View>
          <View className='rounded-full overflow-hidden w-32 h-32'>
            {image
              ? (
                <Image
                  style={{
                    width: 130,
                    height: 130,
                    resizeMode: 'cover'
                  }}
                  className='rounded-full'
                  source={{
                    uri: image
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

          <TouchableOpacity onPress={() => pickImage()} className='absolute bottom-0 right-0 bg-appwhite p-2 rounded-full'>
            <Ionicons
              name='pencil-outline'
              size={20}
              color='#4994C2'
            />
          </TouchableOpacity>
        </View>
        <Text className='text-xl font-bold mt-3'>{route.params.username}</Text>
        <Text className='mt-2 text-appblack'>{route.params.email}</Text>
      </View>
      <View className='gap-3 mt-5 px-5'>
        <View className='flex flex-row justify-between w-full px-2 border-b py-2 border-appgray'>
          <View className='flex flex-row gap-5'>
            <Text className='text-lg font-semibold'>Nombre</Text>
            {InputName ? <TextInput onChangeText={(text) => SetInputName(text)} className='w-3/5' placeholder='Nuevo Nombre' /> : <Text className='text-lg font-light'>{route.params.username}</Text>}
          </View>
          <TouchableOpacity onPress={() => SetInputName(prev => !prev)}>
            <Ionicons
              name='pencil-outline'
              size={20}
              color='#4994C2'
            />
          </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-between w-full px-2 border-b py-2 border-appgray'>
          <View className='flex flex-row gap-5'>
            <Text className='text-lg font-semibold'>Telefono</Text>
            {InputTelefono ? <TextInput onChangeText={(text) => SetInputTelefono(text)} className='w-3/5' placeholder='Nuevo Telefono' /> : <Text className='text-lg font-light'>{route.params.phoneNumber}</Text>}
          </View>
          <TouchableOpacity onPress={() => SetInputTelefono(prev => !prev)}>
            <Ionicons
              name='pencil-outline'
              size={20}
              color='#4994C2'
            />
          </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-between px-2 w-full border-b py-2 border-appgray'>
          {InputContraseña ? <TextInput onChangeText={(text) => SetInputContraseña(text)} placeholder='Nueva Contraseña' className='w-5/6' /> : <Text className='text-lg font-semibold'>Cambiar Contraseña</Text>}
          <TouchableOpacity onPress={() => SetInputContraseña(prev => !prev)}>
            <Ionicons
              name='pencil-outline'
              size={20}
              color='#4994C2'
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className='mt-48 px-5'>
        <Button
          title='Guardar'
          color='#4994C2'
          onPress={() => updateUserProfile()}
        />
      </View>
    </SafeAreaView>
  )
}

export default PersonalInfoScreen

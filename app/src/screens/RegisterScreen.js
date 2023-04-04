import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CustomInput from '../components/CustomInput/CustomInput'
import axios from 'axios'
import { BASE_URL } from '@env'

const Register = ({ navigation }) => {
  const [isSecure, setIsSecure] = useState(true)
  const { control, handleSubmit, formState: { errors } } = useForm()
  console.log(errors)

  const onSubmit = async (data) => {
    await axios.post(BASE_URL + 'users/register', {
      email: data.email,
      phone: data.phone,
      password: data.password
    })
      .then(function (response) {
        console.log(response)
        navigation.navigate('registersuccess')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <SafeAreaView className='bg-appwhite'>
      <View className='flex flex-row justify-center mt-2'>
        <Image
          source={require('../../assets/logo.png')}
          className='w-50 p-4 mb-3 mt-4'
        />
      </View>
      <View>
        <Text className='text-center m-3 mb-5 font-bold text-lg'>Ingresá tus datos</Text>
        <CustomInput
          name='email'
          placeholder='Ingresa tu email'
          control={control}
          rules={{ required: 'Ingrese un email valido', pattern: { value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, message: 'Ingrese un email valido' } }}
        />
        <CustomInput
          name='phone'
          placeholder='Ingrsa tu numero de teléfono'
          control={control}
          rules={{ required: 'Igrese un telefono valido' }}
        />
        <View className='flex-row'>
          <View className='relative w-full'>
            <CustomInput
              name='password'
              placeholder='Ingresa tu contraseña'
              control={control}
              secureTextEntry={isSecure}
              rules={{ required: 'Ingrese una contraseña valida', minLength: { value: 5, message: 'La contraseña debe tener un minimo de 5 caracteres.' }, pattern: { value: /[A-Za-z0-9!?-]{5,12}/, message: 'La contraseña solo puede tener mayúsculas, minúsculas, números.' } }}
            />
          </View>
          <TouchableOpacity
            className='absolute right-px left-80 mt-7' onPress={() => {
              setIsSecure((prev) => !prev)
            }}
          >
            {isSecure ? <Ionicons name='eye-off-outline' size={30} color='#4994C2' /> : <Ionicons name='eye-outline' size={30} color='#4994C2' />}
          </TouchableOpacity>
        </View>
      </View>

      <View className='mt-5'>
        <TouchableOpacity onPress={handleSubmit(onSubmit)} className='bg-appblue mx-4  p-4 rounded-md justify-center items-center'>
          <Text className='text-xl font-base  text-appwhite'>Regístrarte</Text>
        </TouchableOpacity>
      </View>

      <View className='flex flex-row justify-center mt-5'>
        <Image
          source={require('../../images/registerpic.png')}
          className='w-50 p-4 mb-6 mt-5'
        />
      </View>
    </SafeAreaView>
  )
}

export default Register

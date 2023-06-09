import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useForm } from 'react-hook-form'
import CustomInput from '../components/CustomInput/CustomInput'
import Toast from 'react-native-toast-message'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

const Login = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)

  const [isSecure, setIsSecure] = useState(true)
  const { control, handleSubmit, formState: { errors } } = useForm()
  console.log(errors)

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hola!',
      text2: 'Bienvenid@ a Always Alert! 👋'
    })
  }

  const onSubmit = async (data) => {
    setIsLoading(true)
    await axios.post(BASE_URL + 'users/login', {
      email: data.email,
      password: data.password
    })
      .then(function (response) {
        if (response.status === 201) {
          AsyncStorage.setItem('AccessToken', response.data.token)
          navigation.navigate('bottom')
          showToast()
        }
      })
      .catch(function (error) {
        console.log(error.response.data)
      }).finally(() => { setIsLoading(false) })
  }

  return (
    <SafeAreaView className='bg-appwhite '>
      <View className='flex flex-row items-center justify-center mb-3 mt-20'>
        <Image
          source={require('../../assets/logo.png')}
          className='w-50 p-4 mb-10'
        />
      </View>
      <View className='bg-appdarkgrey rounded-3xl'>
        <CustomInput
          name='email'
          placeholder='Ingresa tu email'
          control={control}
          rules={{ required: 'Ingrese un email valido', pattern: { value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, message: 'Ingrese un email valido' } }}
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
        <Text className='text-center mt-4 mb-3'>¿Olvidaste tu contraseña?</Text>
        <TouchableOpacity disabled={isLoading} onPress={handleSubmit(onSubmit)} className='bg-appblue mx-4 mt-4 mb-4 p-4 rounded-md justify-center items-center'>
          <Text className='text-xl font-base  text-appwhite '> {isLoading ? 'Cargando...' : 'Iniciar Sesión'} </Text>
        </TouchableOpacity>
      </View>
      <View className='mt-5'>
        <Text className='text-center mt-3'>¿No tenes Cuenta?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('register') }} className='bg-appred mx-4 mt-10 mb-44 p-4 rounded-md justify-center items-center'>
          <Text className='text-xl font-base text-appwhite'>Regístrarte</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login

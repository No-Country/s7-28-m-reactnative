import { View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'

const PersonalInfoScreen = ({ navigation }) => {
  const [InputEmail, SetInputEmail] = useState(false)
  const [InputTelefono, SetInputTelefono] = useState(false)
  const [InputContraseña, SetInputContraseña] = useState(false)
  const [ChangeImage, setChangeImage] = useState(false)

  return (
    <SafeAreaView>
      <View className='w-full flex items-center h-72 justify-center bg-appbluelight'>
        <View>
          <View className='rounded-full overflow-hidden w-32 h-32'>
            <Image source={require('../../images/avatar.png')} className='object-cover' />
          </View>

          <TouchableOpacity onPress={() => setChangeImage(prev => !prev)} className='absolute bottom-0 right-0 bg-appwhite p-2 rounded-full'>
            <Ionicons
              name='pencil-outline'
              size={20}
              color='#4994C2'
            />
          </TouchableOpacity>
        </View>
        <Text className='text-xl font-bold mt-3'>Mariana Romero</Text>
        <Text className='text-appdarkgrey mt-4'>marianar@gmail.com</Text>
      </View>
      <View className='gap-3 mt-5 px-5'>
        <View className='flex flex-row justify-between w-full px-2 border-b py-2 border-appgray'>
          <View className='flex flex-row gap-5'>
            <Text className='text-lg font-semibold'>Email</Text>
            {InputEmail ? <TextInput className='w-3/5' placeholder='Nuevo Email' /> : <Text className='text-lg font-light'>marianar@gmail.com</Text>}
          </View>
          <TouchableOpacity onPress={() => SetInputEmail(prev => !prev)}>
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
            {InputTelefono ? <TextInput className='w-3/5' placeholder='Nuevo Telefono' /> : <Text className='text-lg font-light'>+54 911 356985625</Text>}
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
          {InputContraseña ? <TextInput placeholder='Nueva Contraseña' className='w-5/6' /> : <Text className='text-lg font-semibold'>Cambiar Contraseña</Text>}
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
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>
    </SafeAreaView>
  )
}

export default PersonalInfoScreen

import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'

const ProfileScreen = ({ navigation }) => {
  const [Modal, SetModal] = useState(false)
  return (
    <SafeAreaView>
      {Modal && <View className='w-full z-50 h-screen flex items-center justify-center bg-appblack bg-opacity-20 absolute top-0'>
        <View className=' w-10 p-5 z-50 bg-appgray flex items-center justify-between'>
          <View className='mb-2 '>
            <Image className='rounded-full' source={require('../../images/Character.png')} />
          </View>
          <View className='flex items-center pb-6'>
            <Text className='text-xl font-semibold'>Cerrar Sesion</Text>
            <Text className='font-light pt-1'>¿De verdad quieres cerrar sesion?</Text>
          </View>
          <View className='flex flex-row gap-4 w-full justify-end'>
            <TouchableOpacity><Text className='px-2 bg-appwhite rounded-md py-1' onPress={() => SetModal(false)}>Cancelar</Text></TouchableOpacity>
            <TouchableOpacity><Text className='px-2 bg-appwhite rounded-md py-1' onPress={() => SetModal(false)}>Entendido</Text></TouchableOpacity>
          </View>
        </View>
                </View>}
      {/* Header */}
      <View className='h-16 bg-applightgray flex justify-center'>
        <Text className='w-full text-lg text-center'>Mi Perfil</Text>
      </View>
      <View className=' w-full flex items-center'>
        <View className='w-32 h-32 flex rounded-full overflow-hidden'>
          <Image className=' object-cover ' source={require('../../images/avatar.png')} />
        </View>

        <Text className='text-xl font-bold mt-2'>Mariana Romero</Text>
        <Text className=' text-appdarkgrey mt-2'>marianar@gmail.com</Text>
      </View>
      <View className='w-full flex items-start pl-10 mt-10'>
        <TouchableOpacity onPress={() => navigation.navigate('personalinfoscreen')} className='h-20 flex flex-row items-center gap-5 border-b w-full border-appbluelight'>
          <Ionicons
            name='person-circle-outline'
            size={30}
            color='#4994C2'
          />
          <Text className='text-lg'>Datos Personales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Como lo uso')} className='h-20 flex flex-row items-center gap-5 border-b w-full border-appbluelight'
        >
          <Ionicons
            name='help-circle'
            size={30}
            color='#4994C2'
          />
          <Text className='text-lg'>Como se usa Always Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('frequentasked')} className=' flex flex-row items-center gap-5 h-20 border-b w-full border-appbluelight'>
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

import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const EmptyContacts = () => {
  const navigation = useNavigation()

  return (
    <View className='flex justify-center items-center mt-3'>
      <View className='w-full flex justify-center items-center'>
        <Image
          style={{
            height: 280,
            resizeMode: 'contain'
          }}
          source={require('../../../images/ContactLogo.png')}
        />
      </View>

      <View className='w-full flex items-center rounded-t-3xl bg-appbluelight pb-20'>
        <View className='pt-7 pb-4'>
          <Text className='text-2xl font-semibold'>
            Aún no tienes contactos
          </Text>
        </View>
        <View className='px-7'>
          <Text className='text-base'>
            Presiona el botón de más para añadir contactos a tu red de emergencia, y al activar la alarma, tus contactos agendados la recibiran, con tu ubicación y enviara ayuda
          </Text>
        </View>
        <View className='mt-10 flex flex-col justify-center items-center'>
          <Text className='text-xl font-semibold pb-5'>Agregar contacto</Text>
          <TouchableOpacity onPress={() => navigation.navigate('newContact')} className='flex justify-center items-center border-4 border-ligthgreen-600 rounded-full h-36 w-36'>
            <Ionicons
              name='add-outline'
              size={60}
              color='black'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default EmptyContacts

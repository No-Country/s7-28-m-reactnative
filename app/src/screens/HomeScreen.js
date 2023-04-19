import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { registerForPushNotificationsAsync } from '../components/home/NotificationHome'
import useExpoToken from '../Hook/useExpoToken'

const HomeScreen = ({ navigation, onSubmit, handlereachgodalert }) => {
  useEffect(() => {
    setExpoToken()
  }, [])

  const setExpoToken = async () => {
    registerForPushNotificationsAsync().then(res => useExpoToken(res))
  }

  return (
    <SafeAreaView>
      {/* Header */}
      <View className='flex flex-row justify-center mt-5'>
        <Image
          source={require('../../assets/logo.png')}
          className='w-50 p-4'
        />
      </View>

      {/* Buttons */}
      <View className='items-center'>
        <TouchableOpacity onPress={handlereachgodalert} style={styles.circle} className='border-4 bg-appwhite border-appblue rounded-full p-5 m-5 mt-10 h-52 w-52 justify-center items-center'>
          <Image
            source={require('../../assets/steps.png')}
          />
          <Text className='text-base mt-4 font-semibold'>Llegué Bien</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubmit} style={styles.circle} className=' border-4 bg-appwhite border-appred rounded-full  p-5 m-5 mt-5 h-52 w-52 justify-center items-center'>
          <Image
            source={require('../../assets/alertIcon.png')}
          />
          <Text className='text-base font-semibold '>Estoy en peligro</Text>
        </TouchableOpacity>
      </View>
      <Text className='text-xl font-semibold mx-2 mt-8 text-center'>Infórmale a tus contactos tu estado, para que estén siempre alertas.</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  circle: {
    elevation: 20
  }
})

export default HomeScreen

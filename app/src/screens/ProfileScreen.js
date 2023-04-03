import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      {/* Header */}
      <View className='flex flex-row justify-center mt-5'>
        <Image
          source={require('../../assets/logo.png')}
          className='w-50 p-4'
        />
      </View>
      <View>
        <Text>ProfileScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

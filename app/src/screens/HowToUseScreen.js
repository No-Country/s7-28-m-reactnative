import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HowToUseScreen = () => {
  return (
    <SafeAreaView>
      {/* Header */}
      <View className='flex flex-row justify-center mt-5 mb-5 '>
        <Image
          source={require('../../assets/logo.png')}
          className='w-50 p-4'
        />
      </View>
      <View>
        <Text>HowToUseScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HowToUseScreen

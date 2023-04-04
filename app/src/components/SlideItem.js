import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const { width, height } = Dimensions.get('screen')

const SlideItem = ({ item }) => {
  return (
    <SafeAreaView>
      <View style={styles.container} className='flex justify-center'>
        <View>
          <Text className='text-center m-5 font-bold text-lg'>{item.description}</Text>
        </View>
        <Animated.Image
          source={item.img}
          resizeMode='contain'
        />
      </View>
    </SafeAreaView>
  )
}

export default SlideItem

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center'
  },
  image: {
    flex: 0.6,
    width: '100%'
  }
})

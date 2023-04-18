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
      <View style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <Animated.Image
          source={item.img}
          resizeMode='contain'
          style={styles.image}
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
  description: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20

  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 22
  },
  image: {
    flex: 0.6,
    width: '100%',
    marginTop: 20
  }
})

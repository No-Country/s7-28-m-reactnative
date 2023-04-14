import { Animated, FlatList, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { BASE_URL } from '@env'
import Slides from './data'
import SlideItem from './SlideItem'
import Pagination from './Pagination'

const Slider = ({ navigation }) => {
  const [index, setIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current

  const WakeUp = async (data) => {
    await axios.post(BASE_URL, {
    })
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
          console.log(response.data)
        }
      })
      .catch(function (error) {
        console.log(error.response.data)
      })
  }

  useEffect(() => {
    WakeUp()
  }, [])

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX
            }
          }
        }
      ],
      {
        useNativeDriver: false
      }
    )(event)
  }

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index)
  }).current

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current

  return (
    <SafeAreaView>
      <View>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.Image}
          />
        </View>
        <FlatList
          data={Slides}
          renderItem={({ item }) => <SlideItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <View style={styles.container}>
          <View>
            <Pagination data={Slides} scrollX={scrollX} index={index} />
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('login') }}>
              <Text style={styles.text}> Omitir </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Slider

const styles = StyleSheet.create({
  container: {
    bottom: 225,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    position: 'absolute',
    bottom: 35,
    left: 55,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 3,
    backgroundColor: '#4994C2'
  },
  text: {
    fontSize: 18,
    color: '#ffff'
  },
  logo: {
    alignItems: 'center',
    marginTop: 45
  }
})

import { View, FlatList } from 'react-native'
import React from 'react'
import Slides from '../../../data/data'
import SliderScreen from '../../screens/SliderScreen'

const slider = () => {
  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SliderScreen item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default slider

import { StyleSheet, Animated, View, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('screen')

const Pagination = ({ data, scrollX, index }) => {
  return (
    <View>
      <View style={styles.container}>
        {data.map((_, idx) => {
          const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width]

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: 'clamp'
          })

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#C9D7E1', '#4994C2', '#C9D7E1'],
            extrapolate: 'clamp'
          })

          return (
            <Animated.View
              key={idx.toString()}
              style={[
                styles.dot,
                { width: dotWidth, backgroundColor }
              ]}
            />
          )
        })}
      </View>
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  container: {
    bottom: 35,
    flexDirection: 'row',
    width: '50%'
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#ccc'
  },
  dotActive: {
    backgroundColor: '#000'
  }
})

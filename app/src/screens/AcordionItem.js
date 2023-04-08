import { View, Text, TouchableOpacity, Animated, StyleSheet, LayoutAnimation } from 'react-native'
import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const AcordionItem = ({ title, bodyText }) => {
  const [showContent, setShowContent] = React.useState(false)
  const animationController = React.useRef(new Animated.Value(0)).current

  const toggleAnimation = {
    duration: 300,
    update: {
      duration: 300,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut
    },
    delete: {
      duration: 200,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut
    }
  }
  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true
    }
    Animated.timing(animationController, config).start()
    LayoutAnimation.configureNext(toggleAnimation)
    setShowContent(!showContent)
  }
  const arrowTrasform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg']
  })
  return (
    <>
      <View className='border-b-2 border-appbluelight mx-5 mt-5 pb-2 '>
        <TouchableOpacity onPress={() => toggleListItem()} className='flex-row justify-between '>
          <View>
            <Text className='font-bold text-lg mr-5'>{title}</Text>
          </View>
          <View>
            <Animated.View style={{ transform: [{ rotateZ: arrowTrasform }] }}>
              <Ionicons
                name='chevron-forward-outline'
                size={30}
                color='#4994C2'
              />
            </Animated.View>
          </View>
        </TouchableOpacity>
      </View>
      {showContent && (
        <View className='mx-5 mt-5 pb-2'>
          <Text>{bodyText}</Text>
        </View>
      )}
    </>
  )
}

export default AcordionItem

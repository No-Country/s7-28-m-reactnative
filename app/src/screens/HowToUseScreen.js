import * as React from 'react'
import { View } from 'react-native'
import { Video, ResizeMode } from 'expo-av'

const HowToUseScreen = ({ navigation }) => {
  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  return (
    <View className='flex-auto bg-appvideo'>
      <Video
        ref={video}
        source={require('../../images/video.mp4')}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={setStatus}
        className='flex-auto'
      />
    </View>
  )
}

export default HowToUseScreen

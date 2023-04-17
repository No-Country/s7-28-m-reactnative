import * as React from 'react'
import { View } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { Video } from 'expo-av'

const HowToUseScreen = () => {
  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  return (
    <View className='flex-auto'>
      <Video
        ref={video}
        source={require('../../images/video.mp4')}
        controls
        useNativeControls
        resizeMode='contain'
        isLooping
        onPlaybackStatusUpdate={setStatus}
        className='flex-auto'
      />
    </View>
  )
}

export default HowToUseScreen

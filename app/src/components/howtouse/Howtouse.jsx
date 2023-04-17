import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Video } from 'expo-av'

const Howtouse = () => {
  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
        }}
        useNativeControls
        resizeMode='contain'
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  video: {
    flex: 1,
    alignSelf: 'stretch'
  }
})

export default Howtouse

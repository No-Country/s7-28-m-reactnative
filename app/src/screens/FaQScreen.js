import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const FaQScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className='w-full flex items-center h-16 justify-center'>
        <Text className='w-full text-lg text-center'>Preguntas Frecuentes</Text>
      </View>
      <View className='bg-appbluelight w-full pb-20 flex items-center'>
        <Image source={require('../../images/CharacterFaQ.png')} className='z-50' />
      </View>
      <View className='bg-appwhite rounded-4xl w-full h-full -mt-20'>
        <Text className='text-center pt-10'>Accordion</Text>
      </View>
    </SafeAreaView>
  )
}

export default FaQScreen

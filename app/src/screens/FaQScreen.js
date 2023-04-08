import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AcordionItem from './AcordionItem'

const info = [
  {
    id: '1',
    question: '¿Como funciona Always Alert?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, corrupti.'
  },
  {
    id: '2',
    question: '¿Es necesario estar conectado a internet para usar la app?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, corrupti.'
  },
  {
    id: '3',
    question: '¿Se pueden enviar alertas de emergencia a varias personas al mismo tiempo?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, corrupti.'
  },
  {
    id: '4',
    question: '¿Como se activa la alarma?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, corrupti.'
  }
]

const FaQScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className='w-full flex items-center h-16 justify-center'>
        <Text className='w-full text-lg text-center'>Preguntas Frecuentes</Text>
      </View>
      <View className='bg-appbluelight w-full pb-20 flex items-center'>
        <Image source={require('../../images/CharacterFaQ.png')} className='z-50' />
      </View>
      <View className='bg-appwhite rounded-t-3xl w-full h-full -mt-20 overflow-hidden'>
        <FlatList
          data={info}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AcordionItem title={item.question} bodyText={item.answer} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default FaQScreen

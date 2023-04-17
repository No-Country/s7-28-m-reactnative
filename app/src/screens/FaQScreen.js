import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AcordionItem from './AcordionItem'

const info = [
  {
    id: '1',
    question: 'Como funciona Always Alert',
    answer: 'Always Alert esta para acompañarte en los momentos, en los que sientas que corres peligro ó quieras avisar a tus contactos que llegaste bien, después de una salida.'
  },
  {
    id: '2',
    question: 'Es necesario estar conectado a internet para usar la app',
    answer: 'Si, la aplicación funciona solo si estas conectado a una red con internet.'
  },
  {
    id: '3',
    question: '¿Se pueden enviar alertas de emergencia a varias personas al mismo tiempo?',
    answer: 'Si, debes dirigirte a la sección de Contactos y agregar los números de las personas a las que quieres alertar que estas en situación de peligro ó que llegaste bien. '
  },
  {
    id: '4',
    question: '¿Como se activa la alarma?',
    answer: 'Desde la aplicación presionando el botón de Estoy en peligro ó Llegué bien, y también presionando dos veces el tercer botón del lado derecho del borde del celular.'
  }
]

const FaQScreen = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-appbluelight'>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default FaQScreen

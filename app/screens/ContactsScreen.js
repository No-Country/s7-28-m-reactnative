import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'

const ContactsScreen = () => {
  const [contact, setContact] = useState(true)

  return (
  // Cuando no tiene contactos
  // <ScrollView>
  //   <View className='flex justify-center items-center mt-8'>
  //     <View className='w-full flex justify-center items-center'>
  //       <Image
  //         style={{
  //           height: 280,
  //           resizeMode: 'contain'
  //         }}
  //         source={require('../images/ContactLogo.png')}
  //       />
  //     </View>

  //     <View className='w-full flex items-center rounded-t-3xl bg-applightblue pb-20'>
  //       <View className='pt-7 pb-4'>
  //         <Text className='text-2xl font-semibold'>
  //           Aún no tienes contactos
  //         </Text>
  //       </View>
  //       <View className='px-7'>
  //         <Text className='text-base'>
  //           Presiona el botón de más para añadir contactos a tu red de emergencia, y al activar la alarma, tus contactos agendados la recibiran, con tu ubicación y enviara ayuda
  //         </Text>
  //       </View>
  //       <View className='mt-10 flex flex-col justify-center items-center'>
  //         <Text className='text-xl font-semibold pb-5'>Crear contacto</Text>
  //         <TouchableOpacity onPress={() => { Alert.alert('Agregar Contacto!') }} className='flex justify-center items-center border-4 border-ligthgreen-600 rounded-full h-36 w-36'>
  //           <Ionicons
  //             name='add-outline'
  //             size={60}
  //             color='black'
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   </View>
  // </ScrollView>

  // Cuando tiene contactos
    <ScrollView>
      <View className='flex justify-center items-center mt-8'>
        <View className='w-full flex justify-center items-center'>
          <Image
            style={{
              height: 280,
              resizeMode: 'contain'
            }}
            source={require('../images/ContactLogo.png')}
          />
        </View>

        <View className='w-full flex items-center rounded-t-3xl bg-applightblue pb-20 px-3'>
          <View className='w-full flex justify-center items-center bg-appblue p-5 rounded-full absolute bottom-16'>
            <TouchableOpacity>
              <Text className='text-appwhite text-base'>Agregar contacto nuevo</Text>
            </TouchableOpacity>
          </View>

          <View className='w-full flex justify-around items-center flex-row absolute mt-9'>
            <View className='border-b pb-4 w-44 flex justify-center items-center'>
              <TouchableOpacity onPress={() => setContact(true)}>
                <Text className='text-base'>Contactos</Text>
              </TouchableOpacity>
            </View>
            <View className='border-b pb-4 w-44 flex justify-center items-center'>
              <TouchableOpacity onPress={() => setContact(false)}>
                <Text className='text-base'>Seleccionados</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        {contact
          ? (
            <View className='w-full'>
              <View className='flex flex-row justify-between items-center bg-applightblue py-6 border-b px-7'>
                <View>
                  <Text className='text-xl'>Martin</Text>
                </View>
                <View>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='close-outline'
                      size={30}
                      color='red'
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className='flex flex-row justify-between items-center bg-applightblue py-6 border-b px-7'>
                <View>
                  <Text className='text-xl'>Juan</Text>
                </View>
                <View>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='close-outline'
                      size={30}
                      color='red'
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className='flex flex-row justify-between items-center bg-applightblue py-6 border-b px-7'>
                <View>
                  <Text className='text-xl'>Rosario</Text>
                </View>
                <View>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='close-outline'
                      size={30}
                      color='red'
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className='flex flex-row justify-between items-center bg-applightblue py-6 border-b px-7'>
                <View>
                  <Text className='text-xl'>Milena</Text>
                </View>
                <View>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='close-outline'
                      size={30}
                      color='red'
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className='flex flex-row justify-between items-center bg-applightblue py-6 border-b px-7'>
                <View>
                  <Text className='text-xl'>Soledad</Text>
                </View>
                <View>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='close-outline'
                      size={30}
                      color='red'
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            )
          : (
            <View className='w-full'>
              <View className='flex flex-row justify-between items-center bg-applightblue py-6 border-b px-7'>
                <View>
                  <Text className='text-xl'>Martin</Text>
                </View>

                <View className='flex flex-row gap-x-4'>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='checkmark-done-outline'
                      size={30}
                      color='green'
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='close-outline'
                      size={30}
                      color='red'
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className='flex flex-row justify-between items-center bg-applightblue py-6 border-b px-7'>
                <View>
                  <Text className='text-xl'>Juan</Text>
                </View>
                <View className='flex flex-row gap-x-4'>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='checkmark-done-outline'
                      size={30}
                      color='green'
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='close-outline'
                      size={30}
                      color='red'
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className='flex flex-row justify-between items-center bg-applightblue py-6 border-b px-7'>
                <View>
                  <Text className='text-xl'>Rosario</Text>
                </View>
                <View className='flex flex-row gap-x-4'>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='checkmark-done-outline'
                      size={30}
                      color='green'
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='close-outline'
                      size={30}
                      color='red'
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className='flex flex-row justify-between items-center bg-applightblue py-6 border-b px-7'>
                <View>
                  <Text className='text-xl'>Milena</Text>
                </View>
                <View className='flex flex-row gap-x-4'>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='checkmark-done-outline'
                      size={30}
                      color='green'
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='close-outline'
                      size={30}
                      color='red'
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className='flex flex-row justify-between items-center bg-applightblue py-6 border-b px-7'>
                <View>
                  <Text className='text-xl'>Soledad</Text>
                </View>
                <View className='flex flex-row gap-x-4'>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='checkmark-done-outline'
                      size={30}
                      color='green'
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className='bg-appwhite rounded-full p-1'>
                    <Ionicons
                      name='close-outline'
                      size={30}
                      color='red'
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            )}
      </View>
    </ScrollView>
  )
}

export default ContactsScreen

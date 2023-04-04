import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const AllContacts = () => {
  const [contact, setContact] = useState(true)

  return (
    <ScrollView>
      <View className='flex justify-center items-center mt-3'>
        <View className='w-full flex justify-center items-center'>
          <Image
            style={{
              height: 280,
              resizeMode: 'contain'
            }}
            source={require('../../images/ContactLogo.png')}
          />
        </View>

        <View className='w-full flex items-center rounded-t-3xl bg-appbluelight pb-20 px-3'>
          <View className='w-full flex justify-center items-center bg-appblue p-5 rounded-full absolute bottom-16'>
            <TouchableOpacity>
              <Text className='text-appwhite text-base'>Agregar contacto nuevo</Text>
            </TouchableOpacity>
          </View>

          <View className='w-full flex justify-around items-center flex-row absolute mt-9'>
            <View className='border-b-8 border-appblue pb-4 w-44 flex justify-center items-center'>
              <TouchableOpacity onPress={() => setContact(true)}>
                <Text className='text-base'>Contactos</Text>
              </TouchableOpacity>
            </View>
            <View className='border-b-8 border-appblue pb-4 w-44 flex justify-center items-center'>
              <TouchableOpacity onPress={() => setContact(false)}>
                <Text className='text-base'>Seleccionados</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        {contact
          ? (
            <View className='w-full'>
              <View className='flex flex-row justify-between items-center bg-appbluelight py-6 border-b-2 border-appblue  px-7'>
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
              <View className='flex flex-row justify-between items-center bg-appbluelight py-6 border-b-2 border-appblue px-7'>
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
              <View className='flex flex-row justify-between items-center bg-appbluelight py-6 border-b-2 border-appblue px-7'>
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
              <View className='flex flex-row justify-between items-center bg-appbluelight py-6 border-b-2 border-appblue px-7'>
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
              <View className='flex flex-row justify-between items-center bg-appbluelight py-6 border-b-2 border-appblue px-7'>
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
              <View className='flex flex-row justify-between items-center bg-appbluelight py-6 border-b px-7'>
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
              <View className='flex flex-row justify-between items-center bg-appbluelight py-6 border-b px-7'>
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
              <View className='flex flex-row justify-between items-center bg-appbluelight py-6 border-b px-7'>
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
              <View className='flex flex-row justify-between items-center bg-appbluelight py-6 border-b px-7'>
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
              <View className='flex flex-row justify-between items-center bg-appbluelight py-6 border-b px-7'>
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

export default AllContacts

import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmptyContacts from '../components/contact/EmptyContacts'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const ContactsScreen = () => {
  const [token, setToken] = useState('')
  const [myContacts, setMyContacts] = useState('')
  const [active, setActive] = useState(1)
  const navigation = useNavigation()

  useEffect(() => {
    const handleGetToken = async () => {
      const dataToken = await AsyncStorage.getItem('AccessToken')
      if (dataToken) {
        setToken(dataToken)
      } else {
        console.log('No existe el token')
      }
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    function fetchMyContacts () {
      fetch(BASE_URL + 'users/contacts', config)
        .then((response) => response.json())
        .then((data) => {
          setMyContacts(data)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    handleGetToken()
    fetchMyContacts()
  }, [token, myContacts])

  const deleteContact = (id) => {
    const config = {
      data: { contactId: id },
      headers: { Authorization: `Bearer ${token}` }
    }

    axios.delete(BASE_URL + 'users/contacts', config)
      .then(function (response) {
        if (response.status === 202) {
          console.log('Usuario eliminado')
        }
      })
      .catch(function (error) {
        console.log(error.response.data)
      })
  }

  return (

    <SafeAreaView>
      {myContacts.length < 1
        ? (
          <EmptyContacts />
          )
        : (
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
                  <TouchableOpacity onPress={() => navigation.navigate('newContact')}>
                    <Text className='text-appwhite text-base'>Agregar contacto nuevo</Text>
                  </TouchableOpacity>
                </View>

                <View className='w-full flex justify-around items-center flex-row absolute mt-7'>
                  <View className={`justify-center items-center w-40 border-b-2 py-2 ${active !== 1 ? ' border-appbluelight' : ' border-appblue'}`}>
                    <TouchableOpacity onPress={() => setActive(1)}>
                      <Text className={`font-normal text-base ${active !== 1 ? 'text-[#8D8E92]' : ''}`}>Contactos</Text>
                    </TouchableOpacity>
                  </View>
                  <View className={`justify-center items-center w-40 border-b-2 py-2 ${active !== 2 ? ' border-appbluelight' : ' border-appblue'}`}>
                    <TouchableOpacity onPress={() => setActive(2)}>
                      <Text className={`font-normal text-base ${active !== 2 ? 'text-[#8D8E92]' : ''}`}>Seleccionados</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>

              {myContacts && active !== 2
                ? (
                    myContacts.map((c) => (
                      <View key={c._id} className='w-full'>
                        <View className='flex flex-row justify-between items-center bg-appbluelight py-5 border-b border-appblue px-7'>
                          <View className='flex flex-row items-center gap-x-5'>
                            {c?.profileImage
                              ? (
                                <Image
                                  style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: 'cover'
                                  }}
                                  className='rounded-full'
                                  source={{
                                    uri: c.profileImage?.url
                                  }}
                                />
                                )
                              : (
                                <Ionicons
                                  name='person-circle-outline'
                                  size={40}
                                />
                                )}
                            <Text className='text-base'>{c.email}</Text>
                          </View>
                          <View>
                            <TouchableOpacity className='bg-appwhite rounded-full p-1' onPress={() => deleteContact(c._id)}>
                              <Ionicons
                                name='close-outline'
                                size={30}
                                color='red'
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    ))
                  )
                : (
                    myContacts.map((c) => (
                      <View key={c._id} className='w-full'>
                        <View className='flex flex-row justify-between items-center bg-appbluelight py-5 border-b border-appblue px-7'>
                          <View className='flex flex-row items-center gap-x-5'>
                            {c?.profileImage
                              ? (
                                <Image
                                  style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: 'cover'
                                  }}
                                  className='rounded-full'
                                  source={{
                                    uri: c.profileImage?.url
                                  }}
                                />
                                )
                              : (
                                <Ionicons
                                  name='person-circle-outline'
                                  size={40}
                                />
                                )}
                            <Text className='text-base w-48'>{c.email}</Text>
                          </View>
                          <View className='flex flex-row gap-x-3'>
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
                    ))
                  )}
            </View>
          </ScrollView>
          )}
    </SafeAreaView>

  )
}

export default ContactsScreen

import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

const ContactsScreen = () => {
  const [token, setToken] = useState('')
  const [myContacts, setMyContacts] = useState('')
  const [active, setActive] = useState(1)
  const [contactsSearched, setContactsSearched] = useState('')
  const [text, onChangeText] = React.useState('')

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

  const showToastOK = () => {
    Toast.show({
      type: 'success',
      text1: 'Usuario agregado con éxito'
    })
  }

  const showToastOKDelete = () => {
    Toast.show({
      type: 'success',
      text1: 'Usuario eliminado con éxito'
    })
  }

  const showToastNO = () => {
    Toast.show({
      type: 'error',
      text1: 'El usuario ya está agregado'
    })
  }

  const showToastSearchFailed = () => {
    Toast.show({
      type: 'error',
      text1: 'No se encontró el usuario'
    })
  }

  const cleanSearchedContacts = () => {
    setContactsSearched('')
  }

  const searchContact = (text) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    if (text) {
      axios.get(BASE_URL + `users/search/${text}`, config)
        .then(function (response) {
          if (response.data?.length > 0) {
            setContactsSearched(response.data)
          } else {
            showToastSearchFailed()
          }
        })
        .catch(function (error) {
          showToastSearchFailed()
          console.log(error.response.data)
        })
    }
    onChangeText('')
  }

  const addNewContact = (id) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    axios.post(BASE_URL + 'users/contacts', {
      newContactId: id
    }, config)
      .then(function (response) {
        if (response.status === 201) {
          showToastOK()
        }
      })
      .catch(function (error) {
        showToastNO()
        console.log(error.response.data)
      })
  }

  const deleteContact = (id) => {
    const config = {
      data: { contactId: id },
      headers: { Authorization: `Bearer ${token}` }
    }

    axios.delete(BASE_URL + 'users/contacts', config)
      .then(function (response) {
        if (response.status === 202) {
          showToastOKDelete()
        }
      })
      .catch(function (error) {
        console.log(error.response.data)
      })
  }

  return (

    <SafeAreaView>

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

          <View className='w-full flex items-center rounded-t-3xl bg-appbluelight px-3'>
            <View className='w-full flex flex-col justify-around items-center mt-7'>
              <View className='flex flex-row px-20'>
                <View className='w-full'>
                  <TextInput
                    className='px-6 py-3 rounded-l-full bg-appbackground'
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Buscar email del usuario'
                    keyboardType='default'
                  />
                </View>
                <View className='rounded-r-full bg-appbackground flex justify-center items-center px-4'>
                  <TouchableOpacity onPress={() => searchContact(text)}>
                    <Ionicons
                      name='search-outline'
                      size={27}
                      color='#4994C2'
                    />
                  </TouchableOpacity>
                </View>

                <View className='flex justify-center items-center ml-4'>
                  <TouchableOpacity onPress={() => cleanSearchedContacts()}>
                    <Ionicons
                      name='sync-outline'
                      size={27}
                      color='#4994C2'
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className='flex flex-row mt-5'>
                <View className={`justify-center items-center w-40 border-b-2 py-2 ${active !== 1 ? ' border-appbluelight' : ' border-appblue'}`}>
                  <TouchableOpacity onPress={() => setActive(1)}>
                    <Text className={`font-normal text-base ${active !== 1 ? 'text-[#8D8E92]' : ''}`}>Agregar</Text>
                  </TouchableOpacity>
                </View>
                <View className={`justify-center items-center w-40 border-b-2 py-2 ${active !== 2 ? ' border-appbluelight' : ' border-appblue'}`}>
                  <TouchableOpacity onPress={() => setActive(2)}>
                    <Text className={`font-normal text-base ${active !== 2 ? 'text-[#8D8E92]' : ''}`}>Contactos</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>

          {!myContacts.length && active === 1
            ? (
                !contactsSearched.length
                  ? (
                    <ScrollView className='w-full h-full'>
                      <View className='flex justify-center items-center bg-appbluelight pt-14 pb-36'>
                        <View className='pt-7 pb-7'>
                          <Text className='text-2xl font-semibold'>
                            Agrega un contacto
                          </Text>
                        </View>
                        <View className='px-7'>
                          <Text className='text-base'>
                            Busca el email de la persona que quieres agregar a tu red de contactos de emergencia
                          </Text>
                        </View>
                      </View>
                    </ScrollView>
                    )
                  : (
                    <ScrollView className='pt-2 pb-12 bg-appbluelight w-full'>
                      {contactsSearched.map((c) => (
                        <View key={c._id} className='rounded-lg bg-appbluelight border-b border-b-appblue w-full'>
                          <View className='flex flex-row items-center justify-center w-full bg-appbluelight py-5' key={c.lookupKey}>
                            <View className='flex flex-row'>
                              <View>
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
                              </View>
                              <View className='flex flex-row items-center ml-3 w-44'>
                                <Text className='text-base'>{c.email}</Text>
                              </View>
                            </View>
                            <View className='p-2 bg-appdarkgrey rounded-lg flex justify-end ml-10'>
                              <TouchableOpacity onPress={() => addNewContact(c._id)}>
                                <Text className='text-base'>Agregar</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      ))}
                    </ScrollView>
                    )
              )
            : myContacts.length && active === 2
              ? (

                <ScrollView className='pt-2 bg-appbluelight w-full'>
                  {myContacts.map((c) => (
                    <View key={c._id} className='w-full'>
                      <View className='flex flex-row justify-around items-center bg-appbluelight py-5 border-b border-appblue px-7'>
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
                          <TouchableOpacity onPress={() => deleteContact(c._id)} className='bg-appwhite rounded-full p-1'>
                            <Ionicons
                              name='close-outline'
                              size={30}
                              color='red'
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  ))}
                </ScrollView>
                )

              : (
                  !myContacts.length && active === 2
                    ? (
                      <ScrollView className='w-full h-full'>
                        <View className='flex justify-center items-center bg-appbluelight pt-14 pb-36'>
                          <View className='pt-7 pb-7'>
                            <Text className='text-2xl font-semibold'>
                              No tienes contactos agregados
                            </Text>
                          </View>
                          <View className='px-7'>
                            <Text className='text-base'>
                              Busca el email de la persona que quieres agregar a tu red de contactos de emergencia
                            </Text>
                          </View>
                        </View>
                      </ScrollView>
                      )
                    : myContacts.length && active === 2
                      ? (
                        <ScrollView className='pt-2 pb-12 bg-appbluelight w-full'>
                          {contactsSearched.map((c) => (
                            <View key={c._id} className='rounded-lg bg-appbluelight border-b border-b-appblue w-full'>
                              <View className='flex flex-row items-center justify-center w-full bg-appbluelight py-5' key={c.lookupKey}>
                                <View className='flex flex-row'>
                                  <View>
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
                                  </View>
                                  <View className='flex flex-row items-center ml-3 w-44'>
                                    <Text className='text-base'>{c.email}</Text>
                                  </View>
                                </View>
                                <View className='p-2 bg-appdarkgrey rounded-lg flex justify-end ml-10'>
                                  <TouchableOpacity onPress={() => addNewContact(c._id)}>
                                    <Text className='text-base'>Agregar</Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                          ))}
                        </ScrollView>
                        )
                      : (
                          !contactsSearched.length
                            ? (
                              <ScrollView className='w-full h-full'>
                                <View className='flex justify-center items-center bg-appbluelight pt-14 pb-36'>
                                  <View className='pt-7 pb-7'>
                                    <Text className='text-2xl font-semibold'>
                                      Agrega un contacto
                                    </Text>
                                  </View>
                                  <View className='px-7'>
                                    <Text className='text-base'>
                                      Busca el email de la persona que quieres agregar a tu red de contactos de emergencia
                                    </Text>
                                  </View>
                                </View>
                              </ScrollView>
                              )
                            : (
                              <ScrollView className='pt-2 pb-12 bg-appbluelight w-full'>
                                {contactsSearched.map((c) => (
                                  <View key={c._id} className='rounded-lg bg-appbluelight border-b border-b-appblue w-full'>
                                    <View className='flex flex-row items-center justify-center w-full bg-appbluelight py-5' key={c.lookupKey}>
                                      <View className='flex flex-row'>
                                        <View>
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
                                        </View>
                                        <View className='flex flex-row items-center ml-3 w-44'>
                                          <Text className='text-base'>{c.email}</Text>
                                        </View>
                                      </View>
                                      <View className='p-2 bg-appdarkgrey rounded-lg flex justify-end ml-10'>
                                        <TouchableOpacity onPress={() => addNewContact(c._id)}>
                                          <Text className='text-base'>Agregar</Text>
                                        </TouchableOpacity>
                                      </View>
                                    </View>
                                  </View>
                                ))}
                              </ScrollView>
                              )
                        )
                )}
        </View>
      </ScrollView>

    </SafeAreaView>

  )
}

export default ContactsScreen

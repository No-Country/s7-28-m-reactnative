import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const ProfileEdit = () => {
  const [ChangeMail, onChangeMail] = useState('')
  const [ChangeTel, onChangeTel] = useState('')
  const [ChangeCont, onChangeCont] = useState('')

  return (

    <View className='mt-10 bg-applightgray flex flex-col px-8'>
      <View className='flex flex-row w-full border-b pb-5 mb-5 space-x-2'>
        <Text className='font-semibold text-lg'>Email </Text>
        <TextInput className='text-lg w-10/12 pr-4 font-light' onChange={(e) => onChangeMail(e)} value={ChangeMail} />
      </View>
      <View className='flex flex-row w-full border-b pb-5 mb-5 space-x-2'>
        <Text className='font-semibold text-lg'>Telefono </Text>
        <TextInput className='w-10/12 text-lg font-light' onChange={(e) => onChangeTel(e)} value={ChangeTel} />
      </View>
      <View className='flex flex-row w-full border-b pb-5 mb-5'>
        <TextInput className='font-semibold w-full text-lg' placeholder='Cambiar Contraseña' onChange={(e) => onChangeCont(e)} />
      </View>
    </View>

  )
}

export default ProfileEdit

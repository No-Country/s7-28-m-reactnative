import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, pattern, rightIcon, rules = {}, placeholder, secureTextEntry, textContentType, keyboardType }) => {
  return (

    <Controller
      control={control}
      name={name}
      rules={rules}
      pattern={pattern}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <>
          <View className='mx-4 mt-4 mb-3' style={[styles.container, { borderColor: error ? '#C83D3D' : '#4994C2' }]}>
            <TextInput
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              rightIcon={rightIcon}
              className='rounded-md mx-4 mt-4 mb-3'
            />
          </View>
          {error && (
            <Text style={{ color: '#C83D3D', alignSelf: 'center' }}>{error.message || 'error'}</Text>
          )}
        </>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',

    borderColor: '#C83D3D',
    borderWidth: 1,
    borderRadius: 5

  },
  input: {}
})

export default CustomInput

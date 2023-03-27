import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const HomeScreen = () => {
    return (
        <SafeAreaView>
            {/* Header */}
            <View className='flex flex-row justify-center mt-5'>
                <Image
                    source={require('../assets/logo.png')}
                    className='w-50 p-4'
                />
            </View>

            {/* Buttons */}
            <View className='items-center'>
                <TouchableOpacity onPress={() => { Alert.alert('Estoy en peligro!') }} className='border-4 border-red-600 rounded-full p-5 m-5 mt-20 h-60 w-60 justify-center items-center'>
                    <Image
                        source={require('../assets/megaphone.png')}
                        className='w-50 p-4'
                    />
                    <Text className='text-xl font-semibold'>Estoy en peligro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Alert.alert('Llegue Bien!') }} className='border-4 border-blue-600 rounded-full p-5 m-5 h-60 w-60 justify-center items-center'>
                    <Image
                        source={require('../assets/steps.png')}
                        className='w-50 p-4'
                    />
                    <Text className='text-xl font-semibold'>Llegue Bien</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}

export default HomeScreen
import { View, ScrollView } from 'react-native'
import React from 'react'

import Notification from '../components/notifications/Notification'

const NotificationsScreen = () => {
  return (
    <View>
      <ScrollView>
        <Notification />
      </ScrollView>
    </View>
  )
}

export default NotificationsScreen

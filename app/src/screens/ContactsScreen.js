import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AllContacts from '../components/contact/AllContacts'
import EmptyContacts from '../components/contact/EmptyContacts'

const ContactsScreen = () => {
  const [contacts] = useState(true)

  return (
    contacts
      ? (
        <SafeAreaView>
          <AllContacts />
        </SafeAreaView>
        )
      : (
        <SafeAreaView>
          <EmptyContacts />
        </SafeAreaView>
        )

  )
}

export default ContactsScreen

const { Expo } = require('expo-server-sdk')

const expo = new Expo()

const verifyTokensContacts = (user, alert) => {
  const messages = []

  for (const pushToken of user.contacts) {
    if (!Expo.isExpoPushToken(pushToken.expoToken)) {
      console.error(`Push token ${pushToken.expoToken} is not a valid Expo push token`)
      continue
    }

    messages.push({
      title: alert.reason,
      to: pushToken.expoToken,
      sound: 'default',
      body: `${user.username} ${alert.reason} \n ${user.email}`,
      data: { },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Z_tqfzLM_nmBZ3eOxjav9nAB4P50v3ucuaEiAURE1g&s'
    })
  }
  sendNotification(messages)
}

const sendNotification = async (messages) => {
  messages.forEach(async (message) => {
    const chunks = expo.chunkPushNotifications([message])
    const tickets = []

    for (const chunk of chunks) {
      try {
        const ticketChunk = await expo.sendPushNotificationsAsync(chunk)
        console.log(ticketChunk)
        tickets.push(...ticketChunk)
      } catch (error) {
        console.error(error)
      }
    }
  })
}

module.exports = { verifyTokensContacts }

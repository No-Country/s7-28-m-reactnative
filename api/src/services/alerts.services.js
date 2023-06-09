const AlertModel = require('../models/alerts.model')
const UserModel = require('../models/user.model')
const { verifyTokensContacts } = require('../utils/sendNotifications')

const getAllAlert = async () => {
  const alerts = await AlertModel.find()

  await alerts.populate('userId')

  return alerts
}

const getAllSendUserAlert = async (email) => {
  const user = await UserModel.findOne({ email }).populate('sendAlerts')

  return user.sendAlerts
}
const getAllReceivedUserAlert = async (email) => {
  const user = await UserModel.findOne({ email }).populate({
    path: 'receivedAlerts',
    populate: {
      path: 'userId',
      select: '-password -createdAt -contacts -updatedAt -receivedAlerts -sendAlerts -expoToken'
    }
  })

  return user.receivedAlerts
}

const createAlert = async (alert, email) => {
  let result
  let user

  try {
    user = await UserModel.findOne({ email }).populate({ path: 'contacts', select: '-password' })
    result = await AlertModel.create({ ...alert, userId: user._id })

    verifyTokensContacts(user, result)
  } catch (error) {
    console.log(error)
  }

  user.sendAlerts.push(result)

  user.contacts.length && user.contacts.forEach(async (user) => {
    const send = await UserModel.findOne({ _id: user })
    send.receivedAlerts.push(result)
    send.save()
  })

  user.save()

  return result
}

const getOneAlert = async (id) => {
  const alert = await AlertModel.findById({ _id: id })
  return alert
}

module.exports = { getAllAlert, createAlert, getOneAlert, getAllSendUserAlert, getAllReceivedUserAlert }

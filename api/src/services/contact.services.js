const UserModel = require('../models/user.model')

const getUserContacts = async (userEmail) => {
  try {
    const user = await UserModel.findOne({ email: userEmail }).populate({
      path: 'contacts',
      select: '-password -contacts -createdAt -updatedAt'
    })
    if (!user) { throw new Error('User not found') }
    return user.contacts
  } catch (error) {
    return error.message
  }
}
const addContact = async (userEmail, newContactId) => {
  try {
    const user = await UserModel.findOne({ email: userEmail })
    if (!user) { throw new Error('User not found') }
    if (user.contacts.includes(newContactId)) { throw new Error('This user is already your contact') }
    const updatedUser = await UserModel.findByIdAndUpdate(
      user._id,
      { $push: { contacts: newContactId } },
      { new: true })
    return updatedUser
  } catch (error) {
    return error.message
  }
}
const deleteContact = async (userEmail, contactId) => {
  try {
    const user = await UserModel.findOne({ email: userEmail })
    if (!user) { throw new Error('User not found') }
    if (!user.contacts.includes(contactId)) { throw new Error('This user is not your contact') }
    const updatedUser = await UserModel.findByIdAndUpdate(
      user._id,
      { $pull: { contacts: contactId } },
      { new: true })
    if (!updatedUser) { throw new Error('Contact could not be deleted') }
    return updatedUser
  } catch (error) {
    return error.message
  }
}

module.exports = { addContact, deleteContact, getUserContacts }

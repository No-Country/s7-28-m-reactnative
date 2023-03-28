const UserModel = require('../models/user.model')

const addContact = async (userId, newContactId) => {
  try {
    const user = await UserModel.findById(userId)
    if (!user) { throw new Error('User not found') }
    if (user.contacts.includes(newContactId)) { throw new Error('This user is already your contact') }
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $push: { contacts: newContactId } },
      { new: true })
    return updatedUser
  } catch (error) {
    return error.message
  }
}
const deleteContact = async (userId, newContactId) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $pull: { contacts: newContactId } },
      { new: true })
    if (!updatedUser) { throw new Error('Contact could not be deleted') }
    return updatedUser
  } catch (error) {
    return error.message
  }
}

module.exports = { addContact, deleteContact }

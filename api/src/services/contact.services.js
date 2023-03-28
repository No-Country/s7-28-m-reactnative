const UserModel = require('../models/user.model')

const addContact = async (userId, newContactId) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $push: { contacts: newContactId } },
      { new: true })
    if (!updatedUser) { throw new Error('No se pudo añadir el contacto') }
    return updatedUser
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}
const deleteContact = async (userId, newContactId) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $pull: { contacts: newContactId } },
      { new: true })
    if (!updatedUser) { throw new Error('No se pudo eliminar el contacto') }
    return updatedUser
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

module.exports = { addContact, deleteContact }

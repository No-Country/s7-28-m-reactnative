// Aca va la logica del negocio
const UserModel = require('../models/user.model')

const findUser = async (id) => {
  const resUser = await UserModel.findById(id)
  if (!resUser) { throw new Error('User not found') }
  return resUser
}
const findAllUsers = async (id) => {
  const resUser = await UserModel.find()
  if (!resUser) { throw new Error('User not found') }
  return resUser
}
const updateProfile = async (data) => {
  console.log(data)
  const resUpdatedUser = await UserModel.findOneAndUpdate({ email: data.email }, data, { new: true })
  if (!resUpdatedUser) { return 'User not founded' }
  return resUpdatedUser
}
const deleteProfile = async (id) => {
  const resDeletedUser = await UserModel.findOneAndRemove({ _id: id })
  if (!resDeletedUser) { return 'User not found' }
  return resDeletedUser
}
module.exports = { findUser, updateProfile, deleteProfile, findAllUsers }

// Aca va la logica del negocio
const UserModel = require('../models/user.model')
const { deleteImage } = require('../utils/cloudinary')

const findUser = async (id) => {
  const resUser = await UserModel.findById(id)
  if (!resUser) { throw new Error('User not found') }
  return resUser
}
const findAllUsers = async (id) => {
  const resUser = await UserModel.find().select('-password')
  if (!resUser) { throw new Error('User not found') }
  return resUser
}
const updateProfile = async (data, email) => {
  const resUpdatedUser = await UserModel.findOneAndUpdate({ email }, data, { new: true })
  if (!resUpdatedUser) { return 'User not founded' }
  return resUpdatedUser
}
const deleteProfile = async (id) => {
  const resDeletedUser = await UserModel.findOne({ _id: id })
  if (!resDeletedUser) { return 'User not found' }
  if (resDeletedUser.profileImage.public_id) {
    await deleteImage(resDeletedUser.profileImage.public_id)
  }
  await resDeletedUser.deleteOne()
  return resDeletedUser
}
module.exports = { findUser, updateProfile, deleteProfile, findAllUsers }

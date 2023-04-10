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
const getUsersByEmail = async (query) => {
  const resUsers = await UserModel.find({ email: { $regex: `^${query}`, $options: 'i' } }).select('-password -contacts -createdAt -updatedAt -receivedAlerts -sendAlerts')
  if (!resUsers || !resUsers.length) { throw new Error(`No emails were found starting with: ${query}`) }
  return resUsers
}
const updateProfile = async (data, email) => {
  const resUpdatedUser = await UserModel.findOneAndUpdate({ email }, data, { new: true })
  if (!resUpdatedUser) { return 'User not founded' }
  return resUpdatedUser
}
const updateProfileImage = async (profileImage, email) => {
  const resUpdatedUserImage = await UserModel.findOneAndUpdate({ email }, { profileImage }, { new: true })
  if (!resUpdatedUserImage) { return 'User not founded' }
  return resUpdatedUserImage
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
module.exports = { findUser, updateProfile, deleteProfile, findAllUsers, updateProfileImage, getUsersByEmail }

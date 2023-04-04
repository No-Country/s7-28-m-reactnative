// En los controladores no va la logica del negocio, eso va en services
const { findUser, updateProfile, deleteProfile, findAllUsers } = require('../services/user.services')
const { handlerHttp } = require('../utils/error.handler')

const getUser = async (req, res) => {
  try {
    const email = req.user
    const resUser = await findUser(email)
    res.status(200).send(resUser)
  } catch (error) {
    handlerHttp(res, (!error ? 'Error cannot get User' : error.message))
  }
}

const getUsers = async (req, res) => {
  try {
    const resUser = await findAllUsers()
    res.status(200).send(resUser)
  } catch (error) {
    handlerHttp(res, 'Error get users')
  }
}
const updateUser = async (req, res) => {
  try {
    const data = req.body
    const updatedUser = await updateProfile(data, req.user)
    if (updatedUser === 'User not found') { return res.status(400).send('User not found') }
    res.status(200).send(updatedUser)
  } catch (error) {
    handlerHttp(res, 'Error update user')
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body
    const resDeletedUser = await deleteProfile(id)
    if (resDeletedUser === 'User not found') { return res.status(400).send('User not found') }
    res.status(200).send(resDeletedUser)
  } catch (error) {
    handlerHttp(res, (!error ? 'Error delete user' : error.message))
  }
}
module.exports = { getUser, getUsers, updateUser, deleteUser }

const { handlerHttp } = require('../utils/error.handler')

const getUser = (req, res) => {
  try {
    const { id } = req.body
    console.log(id)
    res.send(id)
  } catch (error) {
    handlerHttp(res, 'Error get user')
  }
}

const getUsers = (req, res) => {
  try {
    res.send('All users')
  } catch (error) {
    handlerHttp(res, 'Error get users')
  }
}
const updateUser = (req, res) => {
  try {
    const id = req.body
    res.send(id)
  } catch (error) {
    handlerHttp(res, 'Error update user')
  }
}
const createUser = (req, res) => {
  try { res.send('User created') } catch (error) {
    handlerHttp(res, 'Error create user')
  }
}
const deleteUser = (req, res) => {
  try {
    const id = req.body
    res.send(id)
  } catch (error) {
    handlerHttp(res, 'Error delete user')
  }
}
module.exports = { getUser, getUsers, updateUser, createUser, deleteUser }

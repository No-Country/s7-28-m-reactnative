const Router = require('express')
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/user.controller')

const router = Router()
router.get('/', getUser)
router.get('/all', getUsers)
router.post('/', createUser)
router.put('/', updateUser)
router.delete('/', deleteUser)
module.exports = { router }

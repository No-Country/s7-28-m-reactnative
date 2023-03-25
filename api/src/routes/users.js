const Router = require('express')
const { registerController, loginController } = require('../controllers/auth.controller')
const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { checkJwt } = require('../middlewares/authValidateSession')
const { logMiddleware } = require('../middlewares/log')

const router = Router()
router.get('/', logMiddleware, getUser)
router.get('/all', checkJwt, getUsers)
router.post('/register', registerController)
router.post('/login', loginController)
router.put('/', checkJwt, updateUser)
router.delete('/', checkJwt, deleteUser)
module.exports = { router }

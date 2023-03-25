const { registerNewUser, loginUser } = require('../services/auth.services')
const { handlerHttp } = require('../utils/error.handler')

const registerController = async (req, res) => {
  try {
    const responseUser = await registerNewUser(req.body)
    if (responseUser === 'ALREADY_USER') { return res.status(400).send('ALREADY_USER') }
    res.status(201).send(responseUser)
  } catch (error) {
    handlerHttp(res, (!error ? 'Error create user' : error.message))
  }
}
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    const responseUser = await loginUser({ email, password })
    if (responseUser === 'USER_NOT_REGISTERED') { return res.status(404).send('USER_NOT_REGISTERED') }
    if (responseUser === 'USER_OR_PASSWORD_WRONG') { return res.status(403).send('USER_OR_PASSWORD_WRONG') }

    res.status(201).send(responseUser)
  } catch (error) {
    handlerHttp(res, (!error ? 'Error Login user' : error.message))
  }
}

module.exports = { loginController, registerController }

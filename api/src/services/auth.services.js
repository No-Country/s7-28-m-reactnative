const UserModel = require('../models/user.model')
const { encrypt, verify } = require('../utils/bcrypt.handle')
const { generateToken } = require('../utils/jwt.handle')

const registerNewUser = async ({ email, password, phoneNumber, profileImage }) => {
  const checkUser = await UserModel.findOne({ email })
  if (checkUser) { return 'ALREADY_USER' }
  const passHash = await encrypt(password)
  const resCreateUser = await UserModel.create({ email, password: passHash, phoneNumber, profileImage })
  return resCreateUser
}
const loginUser = async ({ email, password }) => {
  const checkUser = await UserModel.findOne({ email })
  if (!checkUser) { return 'USER_NOT_REGISTERED' }
  const passwordHash = checkUser.password
  const isCorrect = await verify(password, passwordHash)
  if (!isCorrect) { return 'USER_OR_PASSWORD_WRONG' }
  const token = await generateToken(checkUser.email)

  const data = {
    token,
    user: checkUser
  }
  return data
}
module.exports = { registerNewUser, loginUser }

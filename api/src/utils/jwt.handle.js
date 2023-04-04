const { sign, verify } = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'secreto'
const generateToken = (id) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: '30d' })
  return jwt
}
const verifyToken = (token) => {
  const tokenVerified = verify(token, JWT_SECRET)
  return tokenVerified
}

module.exports = { generateToken, verifyToken }

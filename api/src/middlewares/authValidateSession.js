const { verifyToken } = require('../utils/jwt.handle')

const checkJwt = (req, res, next) => {
  try {
    const jwtByUser = req.headers.authorization || null
    const jwt = jwtByUser.split(' ').pop()
    const isOk = verifyToken(jwt)
    if (!isOk) {
      res.status(401).send('INVALID_SESSION')
    } else {
      // setting email in body if token exists
      req.body.userEmail = isOk.id
    }

    next()
  } catch (error) {
    res.status(400).send('UNAUTHORIZED_USER')
  }
}
module.exports = { checkJwt }

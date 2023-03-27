const logMiddleware = (req, res, next) => {
  const header = req.headers
  const userAgent = header['user-agent']
  console.log('userAgent:', userAgent)
  next()
}

module.exports = { logMiddleware }

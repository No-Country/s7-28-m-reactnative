
const handlerHttp = (res, error, message) => {
  res.status(500).send({ error })
}
module.exports = { handlerHttp }


const handlerHttp = (res, error) => {
  res.status(500).send({ error })
}
module.exports = { handlerHttp }

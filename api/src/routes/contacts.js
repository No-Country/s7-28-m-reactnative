const Router = require('express')

const router = Router()
router.get('/', (req, res) => {
  res.status(200).send({ data: 'Aqui va la lista de todos los contactos' })
})
module.exports = { router }

const Router = require('express')
const {
  getAllAlertsController,
  createAlertController,
  getOneAlertController
} = require('../controllers/alerts.controller')
const { checkJwt } = require('../middlewares/authValidateSession')

const router = Router()

router.get('/', checkJwt, getAllAlertsController)
router.post('/', checkJwt, createAlertController)
router.get('/:id', checkJwt, getOneAlertController)

module.exports = { router }

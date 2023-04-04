const Router = require('express')
const {
  getAllAlertsController,
  createAlertController,
  getOneAlertController
} = require('../controllers/alerts.controller')
const { checkJwt } = require('../middlewares/authValidateSession')

const router = Router()
/**
 * @openapi
 * /alerts:
 *   get:
 *     requestBody:
 *       description: Objeto JSON que contiene el modo de la alerta
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mode:
 *                 type: string
 *                 description: El modo de la alerta
 *                 example: modo1
 *     tags:
 *       - Alerts
 *
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 */
router.get('/', checkJwt, getAllAlertsController)

/**
 * @openapi
 * /alerts:
 *   post:
 *     tags:
 *       - Alerts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.post('/', checkJwt, createAlertController)
/**
 * @openapi
 * /alerts/:id:
 *   get:
 *     tags:
 *       - Alerts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get('/:id', checkJwt, getOneAlertController)

module.exports = { router }

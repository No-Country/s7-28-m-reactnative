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

// * email: { type: String, required: true, unique: true },
//   ubication: { type: String },
//   date: { type: String },
//   reason: { type: String }

/**
 * @openapi
 * /alerts:
 *   post:
 *     tags:
 *       - Alerts
 *     requestBody:
 *       description: Objeto JSON que contiene el modo de la alerta
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: El modo de la alerta
 *                 example: test@gmail.com
 *               ubication:
 *                  type: string
 *                  descrition: Ubicación en latitud y longitud desde donde se lanza la alerta
 *                  example: definir
 *               date:
 *                  type: string
 *                  descrition: Ubicación en latitud y longitud desde donde se lanza la alerta
 *                  example: definir
 *               reason:
 *                  type: string
 *                  descrition: Ubicación en latitud y longitud desde donde se lanza la alerta
 *                  example: definir
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
 *     parameters:
 *       -  in: header
 *          name: Jwt Token
 *          schema:
 *            type: string
 *          required: true
 *          description: Token generado por jwt
 *       -  in: params
 *          name: Alert Id
 *          schema:
 *            type: string
 *          required: true
 *          description: ID del alerta
 *
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

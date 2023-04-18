const Router = require('express')
const {

  createAlertController,
  getOneAlertController,
  getUserSendAlertController,
  getAllReceivedUserAlertController
} = require('../controllers/alerts.controller')
const { checkJwt } = require('../middlewares/authValidateSession')

const router = Router()
/**
 *
 * /alerts:
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
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 */

// router.get('/', checkJwt, getAllAlertsController)

/**
 * @openapi
 * /alerts:
 *   post:
 *     tags:
 *       - Alerts
 *     parameters:
 *       -  in: header
 *          name: Jwt Token
 *          schema:
 *            type: string
 *          required: true
 *          description: Token generado por jwt
 *     requestBody:
 *       description: Objeto JSON que contiene el modo de la alerta
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ubication:
 *                  type: string
 *                  description: Ubicación en latitud y longitud desde donde se lanza la alerta
 *                  example: https://www.google.com/maps/search/?api=1&query={longitude},{latitude}
 *               reason:
 *                  type: string
 *                  description: Estoy en peligro o estoy bien
 *                  example: Ayuda, estoy en peligro
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
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                       example: 643757fda8ec38388546eb0f
 *                     ubication:
 *                       type: string
 *                       example: https://www.google.com/maps/search/?api=1&query={longitude},{latitude}
 *                     reason:
 *                       type: string
 *                       example: Ayuda, estoy en peligro
 *                     _id:
 *                       type: string
 *                       example: 643951782c2a4fd48258dd1c
 *                     time:
 *                       type: object
 *                       properties:
 *                         day:
 *                           type: string
 *                           example: Viernes
 *                         date:
 *                           type: string
 *                           example: 14/04
 *                         hour:
 *                           type: string
 *                           example: 10:13
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
 *       -  in: path
 *          name: Alert Id
 *          schema:
 *            type: string
 *          required: true
 *          description: ID del alerta
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
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 643631d22a4e413d0bc18d24
 *                     userId:
 *                       type: string
 *                       example: 643596859ec526a39afe04c0
 *                     ubication:
 *                       type: string
 *                       example: https://www.google.com/maps/search/?api=1&query={longitude},{latitude}
 *                     reason:
 *                       type: string
 *                       example: Ayuda Estoy en peligro!
 *                     time:
 *                       type: object
 *                       properties:
 *                         day:
 *                           type: string
 *                           example: Miércoles
 *                         date:
 *                           type: string
 *                           example: 12/04
 *                         hour:
 *                           type: string
 *                           example: 4:21
 */
router.get('/:id', checkJwt, getOneAlertController)

/**
 * @openapi
 * /alerts/user/sendalerts:
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
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 643578dcfbfa212a2a880038
 *                       userId:
 *                         type: string
 *                         example: 642dd81286c8f7ed5a8b7c5c
 *                       ubication:
 *                         type: string
 *                         example: https://www.google.com/maps/search/?api=1&query={longitude},{latitude}
 *                       reason:
 *                         type: string
 *                         example: Ayuda, estoy en peligro
 *                       time:
 *                         type: object
 *                         properties:
 *                           day:
 *                             type: string
 *                             example: Martes 11/4
 *                           hour:
 *                             type: string
 *                             example: 12:12hs
 */
router.get('/user/sendalerts', checkJwt, getUserSendAlertController)

/**
 * @openapi
 * /alerts/user/receivedalerts:
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
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 64360b0cdacf223c1105f852
 *                       userId:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: 642cb5a6002cf16e5066bceb
 *                           email:
 *                             type: string
 *                             example: pepe2@yopmail.com
 *                           profileImage:
 *                             type: string
 *                             example: https://static.wikia.nocookie.net/casados-con-hijos-ar/images/1/17/Pepe-argento.jpg/revision/latest/scale-to-width-down/250?cb=20160119025046&path-prefix=es
 *                           phoneNumber:
 *                             type: string
 *                             example: 12345678
 *                       reason:
 *                         type: string
 *                         example: Llegue bien!
 *                       time:
 *                         type: object
 *                         properties:
 *                           day:
 *                             type: string
 *                             example: Miércoles
 *                           date:
 *                             type: string
 *                             example: 12/04
 *                           hour:
 *                             type: string
 *                             example: 1:36
 */
router.get('/user/receivedalerts', checkJwt, getAllReceivedUserAlertController)

module.exports = { router }

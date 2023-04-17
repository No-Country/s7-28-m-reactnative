const Router = require('express')
const {
  registerController,
  loginController
} = require('../controllers/auth.controller')
const {
  newContact,
  removeContact,
  getContacts
} = require('../controllers/contacts.controller')
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  updateUserProfileImage,
  searchUsers
} = require('../controllers/user.controller')
const { checkJwt } = require('../middlewares/authValidateSession')
const fileUpload = require('express-fileupload')
// const { logMiddleware } = require('../middlewares/log')

const router = Router()

/**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     parameters:
 *       -  in: header
 *          name: token
 *          schema:
 *            type: string
 *          required: true
 *          description: Token generado por jwt
 *     responses:
 *       200:
 *         description: Este endpoint te devuelve un usuario, se debe pasar el token en headers
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
router.get('/', checkJwt, getUser)
/**
 * @openapi
 * /users/all:
 *   get:
 *     tags:
 *       - Users
 *     parameters:
 *       -  in: header
 *          name: token
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
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get('/all', checkJwt, getUsers)
/**
 * @openapi
 * /users/search/query:
 *   get:
 *     tags:
 *       - Users
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
router.get('/search/:query', checkJwt, searchUsers)
/**
 * @openapi
 * /users/register:
 *   post:
 *     tags:
 *       - Users
 *     requestBody:
 *       description: Objeto JSON que contiene el email y password del usuario
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                  type: string
 *                  descrition: Email del usuario
 *                  example: alwaysalert@gmail.com
 *               password:
 *                  type: string
 *                  descrition: Contraseña del usuario
 *                  example: AlwaysAlert2023
 *               phoneNumber:
 *                  type: string
 *                  descrition: Numero de telefono
 *                  example: +54625452636
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: alwaysalert@gmail.com
 *                 password:
 *                   type: string
 *                   example: $2a$10$wwbZdhsW3ZJgdnb54dGS1Ojjeva9FvEw2wwq3G.VAvteddD.URVYS
 *                 phoneNumber:
 *                   type: string
 *                   example: +54625452636
 *                 expoToken:
 *                   type: string
 *                   example: ""
 *                 profileImage:
 *                   type: object
 *                   properties:
 *                     public_id:
 *                       type: string
 *                       example: ""
 *                     url:
 *                       type: string
 *                       example: https://res.cloudinary.com/dxtmgc2ja/image/upload/v1680616910/alwaysalert/placeholder_tmjft9.png
 *                 contacts:
 *                   type: array
 *                   items:
 *                     type: object
 *                 sendAlerts:
 *                   type: array
 *                   items:
 *                     type: object
 *                 receivedAlerts:
 *                   type: array
 *                   items:
 *                     type: object
 *                 _id:
 *                   type: string
 *                   example: 64394802cac05fc842a48039
 *                 createdAt:
 *                   type: string
 *                   example: 2023-04-14T12:33:06.521Z
 *                 updatedAt:
 *                   type: string
 *                   example: 2023-04-14T12:33:06.521Z
 */

router.post('/register', registerController)
/**
 * @openapi
 * /users/login:
 *   post:
 *     tags:
 *       - Users
 *     requestBody:
 *       description: Objeto JSON que contiene el email y password del usuario
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                  type: string
 *                  descrition: Email del usuario
 *                  example: alwaysalert@gmail.com
 *               contraseña:
 *                  type: string
 *                  descrition: Contraseña del usuario
 *                  example: AlwaysAlert2023
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 6426e76ece3bce4428a55378
 *                     email:
 *                       type: string
 *                       example: test@test.com
 *                     password:
 *                       type: string
 *                       example: $2a$10$2MGu6VMKUZ4niEnNl0iNAO2IAX7OL1tVBY5wbLmCdyP31Rs/Jbf6m
 *                     phoneNumber:
 *                       type: string
 *                       example: +54 9 111 111
 *                     expoToken:
 *                       type: string
 *                       example: ExponentPushToken[ZHOyrXPkdhaaaaNasdasdap]
 *                     profileImage:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                           example: ""
 *                         url:
 *                           type: string
 *                           example: https://res.cloudinary.com/dxtmgc2ja/image/upload/v1680616910/alwaysalert/placeholder_tmjft9.png
 *                     contacts:
 *                       type: array
 *                       items:
 *                         type: string
 *                         example: ObjectId referenciando otra colección
 *                     sendAlerts:
 *                       type: array
 *                       items:
 *                          type: string
 *                          example: ObjectId referenciando otra colección
 *                     receivedAlerts:
 *                       type: array
 *                       items:
 *                          type: string
 *                          example: ObjectId referenciando otra colección
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2023-03-31T14:00:14.817Z
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2023-03-31T14:00:14.817Z
 */

router.post('/login', loginController)
/**
 * @openapi
 * /users:
 *   patch:
 *     tags:
 *       - Users
 *     parameters:
 *       -  in: header
 *          name: token
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
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.patch('/', checkJwt, updateUser)
/**
 * @openapi
 * /users:
 *   delete:
 *     tags:
 *       - Users
 *     parameters:
 *       -  in: header
 *          name: token
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
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.put(
  '/profileImage',
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
  }),
  checkJwt,
  updateUserProfileImage
)
/**
 * @openapi
 * /users/profileImage:
 *   put:
 *    tags:
 *     - Users
 *   parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *        required: true
 *        description: Token generado por jwt
 *      - in: formData
 *        name: profileImage
 *        type: file
 *        required: true
 *        description: Imagen de perfil del usuario
 *   responses:
 *     200:
 *       description: OK
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             properties:
 *               status:
 *                 type: string
 *                 example: OK
 *               data:
 *                 type: array
 *                 items:
 *                     type: object
 */
router.delete('/', checkJwt, deleteUser)
/**
 * @openapi
 * /users/contacts:
 *   get:
 *     tags:
 *       - Users
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
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get('/contacts', checkJwt, getContacts)
/**
 * @openapi
 * /users/contacts:
 *   post:
 *     tags:
 *       - Users
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
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.post('/contacts', checkJwt, newContact)
/**
 * @openapi
 * /users/contacts:
 *   delete:
 *     tags:
 *       - Users
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
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.delete('/contacts', checkJwt, removeContact)
module.exports = { router }

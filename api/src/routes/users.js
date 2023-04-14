const Router = require('express')
const { registerController, loginController } = require('../controllers/auth.controller')
const { newContact, removeContact, getContacts } = require('../controllers/contacts.controller')
const { getUsers, getUser, updateUser, deleteUser, updateUserProfileImage, searchUsers } = require('../controllers/user.controller')
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
router.post('/register', registerController)
/**
 * @openapi
 * /users/login:
 *   post:
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
router.post('/login', loginController)
/**
 * @openapi
 * /users:
 *   put:
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
router.put('/', checkJwt, updateUser)
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
router.put('/profileImage', fileUpload({
  useTempFiles: true,
  tempFileDir: './uploads'
}), checkJwt, updateUserProfileImage)
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
 *         description: Obtiene una lista con todos los contactos del usuario logueado
 *         content:
 *           application/json:
 *             schema:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       email:
 *                         type: string
 *                       profileImage:
 *                         type: object
 *                         properties:
 *                           url:
 *                             type: string
 *                     example:
 *                       _id: "642cb3b729fa00c5d7c7f131"
 *                       email: "andres@gmail.com"
 *                       profileImage:
 *                         url: "https://randomuser.me/api/portraits/women/26.jpg"
 *                       phoneNumber: "+54 9 11111111"
 *                       username: "andres"
 *
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
 *          name: Authorization
 *          schema:
 *            type: string
 *          required: true
 *          description: Token generado por jwt
 *       -  in: body
 *          name: newContactId
 *          schema:
 *            type: object
 *            properties:
 *              newContactId:
 *                type: string
 *          required: true
 *          description: Identificador del nuevo contacto a agregar
 *     responses:
 *       201:
 *         description: Devuelve la lista de contactos actualizada con el nuevo contacto
 *         content:
 *           application/json:
 *             schema:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       email:
 *                         type: string
 *                       profileImage:
 *                         type: object
 *                         properties:
 *                           url:
 *                             type: string
 *                     example:
 *                       _id: "642cb3b729fa00c5d7c7f131"
 *                       email: "andres@gmail.com"
 *                       profileImage:
 *                         url: "https://randomuser.me/api/portraits/women/26.jpg"
 *
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
 *          name: Authorization
 *          schema:
 *            type: string
 *          required: true
 *          description: Token generado por jwt
 *       -  in: body
 *          name: contactId
 *          schema:
 *            type: object
 *            properties:
 *              contactId:
 *                type: string
 *          required: true
 *          description: Identificador del contacto a eliminar
 *     responses:
 *       202:
 *         description: Devuelve la lista de contactos actualizada sin el contacto eliminado
 *         content:
 *           application/json:
 *             schema:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       email:
 *                         type: string
 *                       profileImage:
 *                         type: object
 *                         properties:
 *                           url:
 *                             type: string
 *                     example:
 *                       _id: "642cb3b729fa00c5d7c7f131"
 *                       email: "andres@gmail.com"
 *                       profileImage:
 *                         url: "https://randomuser.me/api/portraits/women/26.jpg"
 *
 */
router.delete('/contacts', checkJwt, removeContact)
module.exports = { router }

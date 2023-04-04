const Router = require('express')
const { registerController, loginController } = require('../controllers/auth.controller')
const { newContact, removeContact, getContacts } = require('../controllers/contacts.controller')
const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { checkJwt } = require('../middlewares/authValidateSession')
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

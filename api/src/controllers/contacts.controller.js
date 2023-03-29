const { handlerHttp } = require('../utils/error.handler')
const { addContact, deleteContact, getUserContacts } = require('../services/contact.services')
// En los controladores no va la logica del negocio, eso va en services
const getContacts = async (req, res) => {
  const { userId } = req.body
  try {
    const response = await getUserContacts(userId)
    if (response === 'User not found') {
      return res.status(404).json({ error: response })
    }
    res.status(201).send(response)
  } catch (error) {
    handlerHttp(res, (!error ? 'Error getting contacts' : error.message))
  }
}
const newContact = async (req, res) => {
  const { userId, newContactId } = req.body
  try {
    const response = await addContact(userId, newContactId)
    if (response === 'User not found') {
      return res.status(404).json({ error: response })
    }
    if (response === 'This user is already your contact') {
      return res.status(406).json({ error: response })
    }
    res.status(201).send(response)
  } catch (error) {
    handlerHttp(res, (!error ? 'Error adding contact' : error.message))
  }
}
const removeContact = async (req, res) => {
  const { userId, newContactId } = req.body
  try {
    const response = await deleteContact(userId, newContactId)
    if (response === 'Contact could not be deleted') { throw new Error(response) }
    res.status(202).send(response)
  } catch (error) {
    handlerHttp(res, (!error ? 'Error removing contact' : error.message))
  }
}
module.exports = { newContact, removeContact, getContacts }

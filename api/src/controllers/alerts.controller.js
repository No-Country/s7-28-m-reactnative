const { getAllAlert, createAlert, getOneAlert, getAllSendUserAlert, getAllReceivedUserAlert } = require('../services/alerts.services')

const getAllAlertsController = async (req, res) => {
  try {
    const alerts = await getAllAlert()

    res.status(200).send({ status: 'success', data: alerts })
  } catch (error) {
    res.status(404).send({ status: 'error', message: error })
  }
}

const getUserSendAlertController = async (req, res) => {
  const email = req.user

  try {
    const alerts = await getAllSendUserAlert(email)

    res.status(200).send({ status: 'success', data: alerts })
  } catch (error) {
    res.status(404).send({ status: 'error', message: error })
  }
}

const getAllReceivedUserAlertController = async (req, res) => {
  const email = req.user
  try {
    const alerts = await getAllReceivedUserAlert(email)

    res.status(200).send({ status: 'success', data: alerts })
  } catch (error) {
    res.status(404).send({ status: 'error', message: error.message })
  }
}

const getOneAlertController = async (req, res) => {
  const { id } = req.params

  try {
    const alert = await getOneAlert(id)

    res.status(200).send({ status: 'success', data: alert })
  } catch (error) {
    res.status(404).send({ status: 'error', message: error.message })
  }
}

const createAlertController = async (req, res) => {
  try {
    const result = await createAlert(req.body, req.user)

    res.status(200).send({ status: 'success', data: result })
  } catch (error) {
    res.status(404).send({ status: 'error', message: error })
  }
}

module.exports = { getAllAlertsController, createAlertController, getOneAlertController, getUserSendAlertController, getAllReceivedUserAlertController }

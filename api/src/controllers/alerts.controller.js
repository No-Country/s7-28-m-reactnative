// En los controladores no va la logica del negocio, eso va en services

const { getAllAlert, createAlert, getOneAlert } = require('../services/alerts.services')

const getAllAlertsController = async (req, res) => {
  try {
    const alerts = await getAllAlert()

    res.status(200).send({ status: 'success', data: alerts })
  } catch (error) {
    console.log(error)
  }
}

const getOneAlertController = async (req, res) => {
  const { id } = req.params

  try {
    const alert = await getOneAlert(id)

    res.status(200).send({ status: 'success', data: alert })
  } catch (error) {
    console.log(error)
  }
}

const createAlertController = async (req, res) => {
  try {
    const result = await createAlert()

    res.status(200).send({ status: 'success', data: result })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllAlertsController, createAlertController, getOneAlertController }

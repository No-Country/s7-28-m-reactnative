const AlertModel = require('../models/alerts.model')

const getAllAlert = async () => {
  const alerts = await AlertModel.find()
  return alerts
}

const createAlert = async (alert) => {
  const result = await AlertModel.create(alert)
  return result
}

const getOneAlert = async (id) => {
  const alert = await AlertModel.findById({ _id: id })
  return alert
}

module.exports = { getAllAlert, createAlert, getOneAlert }

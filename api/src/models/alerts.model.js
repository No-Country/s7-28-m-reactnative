const { Schema, model } = require('mongoose')

const AlertSchema = new Schema({
  email: { type: String, required: true, unique: true },
  ubication: { type: String },
  date: { type: String }, // TODO: Necesario?
  reason: { type: String }// TODO: Necesario?
}, {
  timestamps: true, versionKey: false
})

const AlertModel = model('Alert', AlertSchema)
module.exports = AlertModel

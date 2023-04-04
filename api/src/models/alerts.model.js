const { Schema, model } = require('mongoose')

const AlertSchema = new Schema({
  email: { type: String, required: true, unique: true },
  ubication: { type: String },
  date: { type: String },
  reason: { type: String }
}, {
  timestamps: true, versionKey: false
})

const AlertModel = model('Alert', AlertSchema)
module.exports = AlertModel

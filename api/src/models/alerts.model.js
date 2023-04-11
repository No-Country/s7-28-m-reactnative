const { Schema, model } = require('mongoose')
const { formatDate } = require('../utils/formatStrings')

const AlertSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  ubication: { type: String },
  reason: { type: String },
  time: { type: String, default: new Date() }
}, {
  timestamps: false, versionKey: false
})

AlertSchema.pre('save', function (next) {
  this.time = formatDate()
  next()
})

const AlertModel = model('Alert', AlertSchema)
module.exports = AlertModel

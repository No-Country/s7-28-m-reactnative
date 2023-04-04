const { Schema, model } = require('mongoose')

const AlertSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  ubication: { type: String },
  reason: { type: String }
}, {
  timestamps: true, versionKey: false
})

const AlertModel = model('Alert', AlertSchema)
module.exports = AlertModel

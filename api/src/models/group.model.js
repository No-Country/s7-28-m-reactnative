const { Schema, model } = require('mongoose')
const GroupSchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  admin: { type: String, require: true }
}, {
  timestamps: true, versionKey: false
})

const GroupModel = model('Group', GroupSchema)
module.exports = GroupModel

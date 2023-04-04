const { Schema, model } = require('mongoose')
const UserSchema = new Schema({
  first_name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phoneNumber: { type: String },
  profileImage: { type: String, default: '' },
  contacts: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  sendAlerts: [{ type: Schema.Types.ObjectId, ref: 'Alert' }],
  receivedAlerts: [{ type: Schema.Types.ObjectId, ref: 'Alert' }]
}, {
  timestamps: true,
  versionKey: false
})

const UserModel = model('User', UserSchema)

module.exports = UserModel

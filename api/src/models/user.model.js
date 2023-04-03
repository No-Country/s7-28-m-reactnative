const { Schema, model } = require('mongoose')
const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phoneNumber: { type: String },
  profileImage: { type: String, default: '' },
  contacts: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true,
  versionKey: false
})

const UserModel = model('User', UserSchema)

module.exports = UserModel

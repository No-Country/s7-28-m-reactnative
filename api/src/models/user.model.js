const { Schema, model } = require('mongoose')
const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phoneNumber: { type: String },
  profileImage: { type: String }
}, {
  timestamps: true,
  versionKey: false
})

const UserModel = model('User', UserSchema)

module.exports = UserModel

const { Schema, model } = require('mongoose')
const UserSchema = new Schema({
  firstName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phoneNumber: { type: String },
  expoToken: { type: String, default: '' },
  profileImage: {
    type: Object,
    default: {
      public_id: '',
      url: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1680616910/alwaysalert/placeholder_tmjft9.png'
    }
  },
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

const { Schema, model } = require('mongoose')
const UserSchema = new Schema({
  email: { type: String, required: true, unique: [true, 'Este usuario ya esta en uso'] },
  password: { type: String, required: [true, 'El campo password no puede estar vacio'] },
  phoneNumber: { type: String },
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
  }]
}, {
  timestamps: true,
  versionKey: false
})

const UserModel = model('User', UserSchema)

module.exports = UserModel

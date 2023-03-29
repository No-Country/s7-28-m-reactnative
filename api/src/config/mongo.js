require('dotenv').config({})
const { connect } = require('mongoose')

async function dbConnect () {
  const DB_URI = 'mongodb+srv://s7-28-admin:uhCTkDLnAplOklQI@cluster0.n4rem.mongodb.net/alwaysalert'
  await connect(DB_URI)
}
module.exports = dbConnect

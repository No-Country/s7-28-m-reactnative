require('dotenv').config({})
const express = require('express')
const cors = require('cors')
const router = require('./routes')
const db = require('./config/mongo')
const app = express()

const port = process.env.PORT || 3001
app.use(cors())
app.use(express.json())
app.use(router)
db().then(() => console.log('Connection ready'))
app.listen(port, () => {
  console.log(`Listen port:${port}`)
})

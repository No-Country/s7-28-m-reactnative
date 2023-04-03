const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Always Alert API', version: '1.0.0' }
  },
  apis: ['src/routes/index.js']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  console.log('Version 1')
}

module.exports = { swaggerDocs }

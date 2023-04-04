const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Always Alert API', version: '1.0.0' }
  },
  apis: ['src/routes/users.js', 'src/routes/alerts.js', 'src/routes/contacts.js', 'src/routes/groups.js']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/doc.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  console.log('Version 1')
}

module.exports = { swaggerDocs }

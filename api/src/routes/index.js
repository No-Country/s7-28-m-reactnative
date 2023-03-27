const { Router } = require('express')
const { readdirSync } = require('fs')

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName) => {
  const file = fileName.split('.').shift()
  return file
}

// eslint-disable-next-line array-callback-return
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName)
  if (cleanName !== 'index') {
    const moduleRouter = require(`./${cleanName}`)
    router.use(`/${cleanName}`, moduleRouter.router)
  }
})
module.exports = router

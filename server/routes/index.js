import { Router } from 'express'
import appPaths from '../../config/paths'
import contactsRouter from './contacts'

const appRouter = new Router()

appRouter.get('/', (req, res) => {
  res.sendFile(`${appPaths.appBuild}/client/index.html`)
})

appRouter.get('/api/v1', (req, res) => {
  res.send({
    message: 'Welcome to Random Phone Number Generator API'
  })
})

appRouter.use(contactsRouter)

export default appRouter

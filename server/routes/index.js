import { Router } from 'express'
import appPaths from '../../config/paths'

const appRouter = new Router()

appRouter.get('/', (req, res) => {
  res.sendFile(`${appPaths.appBuild}/client/index.html`)
})

appRouter.get('/api/v1', (req, res) => {
  res.send({
    message: 'Welcome To Course-Manangement-System Gateway Platform'
  })
})

export default appRouter

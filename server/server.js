/* eslint-disable no-console */
import chalk from 'chalk'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import PhoneNumberFactory from './factories/phoneNumberFactory'
import appRouter from './routes'
import appPaths from '../config/paths'

dotenv.config()

const environment = process.env.NODE_ENV
const API_PORT = process.env.PORT || 5000
const allowedOrigins = process.env.ALLOWED_ORIGINS

const contactsFilePath = `${appPaths.appData}/contacts.json`
PhoneNumberFactory.buildList(10, contactsFilePath, true)

const printStartMessage = () => {
  let modeColorPrint = 'yellow'
  if (environment === 'production') {
    modeColorPrint = 'green'
  }
  console.log(chalk[modeColorPrint](`Started RPNG API in ${environment} mode`))
  console.log(chalk.green(`RPNG API is running on port: ${API_PORT}`))
}

const app = express()

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))
app.use('/static', express.static(`${appPaths.appBuild}/client/static`))
app.use(appRouter)

app.listen(API_PORT, (error) => {
  if (error) {
    console.log(chalk.red(error))
  } else {
    printStartMessage()
  }
})

export default app

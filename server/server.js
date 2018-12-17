/* eslint-disable no-console */
import chalk from 'chalk'
import dotenv from 'dotenv'
import express from 'express'
import PhoneNumberFactory from './factories/phoneNumberFactory'
import appRouter from './routes'
import appPaths from '../config/paths'

dotenv.config()

const PORT = process.env.API_PORT || 5000
const environment = process.env.NODE_ENV

const contactsFilePath = `${appPaths.appData}/contacts.json`
PhoneNumberFactory.buildList(10, contactsFilePath, true)

const printStartMessage = () => {
  let modeColorPrint = 'yellow'
  if (environment === 'production') {
    modeColorPrint = 'green'
  }
  console.log(chalk[modeColorPrint](`Started RPNG API in ${environment} mode`))
  console.log(chalk.green(`RPNG API is running on port: ${PORT}`))
}

const app = express()

app.use('/static', express.static(`${appPaths.appBuild}/client/static`))
app.use(appRouter)

app.listen(PORT, (error) => {
  if (error) {
    console.log(chalk.red(error))
  } else {
    printStartMessage()
  }
})

export default app

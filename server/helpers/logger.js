/* eslint-disable no-console */
import chalk from 'chalk'

const logger = {
  error(message) {
    console.log(chalk.red(message))
  },
  success(message) {
    console.log(chalk.green(message))
  },
  warn(message) {
    console.log(chalk.yellow(message))
  }
}

export default logger

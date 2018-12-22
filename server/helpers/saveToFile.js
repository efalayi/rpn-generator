/* eslint-disable no-console */
import fs from 'fs'
import logger from './logger'

const convertToJSONData = (dataName, payload) => {
  const jsonData = {}
  jsonData[dataName] = payload
  return JSON.stringify(jsonData, null, 2)
}

const saveToFile = async (filePath, dataName, dataValue) => {
  const jsonData = convertToJSONData(dataName, dataValue)
  await fs.writeFile(filePath, jsonData, (error) => {
    if (error) {
      logger.error(error)
    } else {
      logger.success(`${dataName} was succesfully saved to ${filePath}`)
    }
  })
}

export default saveToFile

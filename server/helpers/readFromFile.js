import fs from 'fs'

const readFromFile = async (filePath, dataName) => new Promise((resolve, reject) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      reject(error)
    }
    const database = JSON.parse(data)
    const fetchedData = database[dataName] || []
    resolve(fetchedData)
  })
})

export default readFromFile

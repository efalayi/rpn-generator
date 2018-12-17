import { expect } from 'chai'
import fsMock from 'mock-fs'
import readFromFile from './readFromFile'

describe('#readFromFile', () => {
  it('should retrieve data from file', async () => {
    const filePath = './server/data/test.json'
    const mockData = 'Mock data for readFile'
    fsMock({
      'server/data': {
        'test.json': JSON.stringify({
          mockData
        }),
      }
    })
    const retrievedData = await readFromFile(filePath, 'mockData')
    expect(retrievedData).to.equal('Mock data for readFile')
    fsMock.restore()
  })
})

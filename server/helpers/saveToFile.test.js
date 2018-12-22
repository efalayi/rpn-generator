/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import fsMock from 'mock-fs'
import sinon from 'sinon'
import saveToFile from './saveToFile'
import logger from './logger'

describe('#saveToFile', () => {
  it('should log error message if an error occured while saving data to file', async () => {
    const filePath = './server/data/test.json'
    const dataTobeSaved = []
    fsMock({
      '.server/data': {
        'test.json': dataTobeSaved
      }
    })
    const logSpy = sinon.spy(logger, 'error')
    await saveToFile(filePath, 'dataName', dataTobeSaved)
    expect(logSpy.called).to.be.true
    fsMock.restore()
    logSpy.restore()
  })
  it('should log success message if data was saved to file', async () => {
    const filePath = './server/data/test.json'
    const dataTobeSaved = []
    fsMock({
      'server/data': fsMock.directory({
        items: {
          'test.json': Buffer.from(dataTobeSaved),
        }
      })
    })
    const logSpy = sinon.spy(logger, 'success')
    await saveToFile(filePath, 'dataName', dataTobeSaved)
    expect(logSpy.called).to.be.true
    expect(logSpy.calledWith('dataName was succesfully saved to ./server/data/test.json')).to.be.true
    fsMock.restore()
    logSpy.restore()
  })
})

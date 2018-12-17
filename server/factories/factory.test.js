import { expect } from 'chai'
import fsMock from 'mock-fs'
import Factory from './factory'

describe('#Factory', () => {
  it('should be defined', () => {
    expect(typeof Factory).to.equal('function')
  })
  it('should create a new instance', () => {
    const SampleFactory = new Factory({})
    expect(SampleFactory).to.be.an.instanceOf(Factory)
  })

  describe('#getFactoryName', () => {
    it('should return factory name', () => {
      const SampleFactory = new Factory({
        name: 'Sample Factory'
      })
      const factoryName = SampleFactory.getFactoryName()
      expect(factoryName).to.equal('Sample Factory')
    })
    it('should return default factory name if factory name was not set', () => {
      const SampleFactory = new Factory({})
      const factoryName = SampleFactory.getFactoryName()
      expect(factoryName).to.equal('Factory')
    })
  })

  describe('#build', () => {
    it('should throw error if factory type does not exist', () => {
      const SampleFactory = new Factory({})
      expect(SampleFactory.build).to.throw()
    })
    it('should build data if factory type exists', () => {
      const SampleFactory = new Factory({
        type: 'phone'
      })
      expect(SampleFactory.build).not.to.throw()
    })
  })

  describe('#buildList', () => {
    it('should be build a list with defined factory type', async () => {
      const SampleFactory = new Factory({
        type: 'phone'
      })
      const sampleData = await SampleFactory.buildList(3)
      expect(sampleData).to.be.an('array')
    })
    it('should save list to file is shouldSaveToFile is true', async () => {
      const filePath = './server/data/test.json'
      fsMock({
        'server/data': fsMock.directory({
          items: {
            'test.json': 'test',
          }
        })
      })
      const SampleFactory = new Factory({
        type: 'phone'
      })
      const sampleData = await SampleFactory.buildList(3, filePath, true)
      expect(sampleData).to.be.an('array')
    })
  })
})

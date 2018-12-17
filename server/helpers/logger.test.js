/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import sinon from 'sinon'
import logger from './logger'

describe('#logger', () => {
  describe('#methods', () => {
    it('should have an error method', () => {
      expect(logger).to.have.property('error')
    })
    it('should have a success method', () => {
      expect(logger).to.have.property('success')
    })
    it('should have a warn method', () => {
      expect(logger).to.have.property('warn')
    })
  })
  describe('#error', () => {
    it('should log error message', () => {
      const consoleSpy = sinon.spy(console, 'log')
      logger.warn('error message')
      expect(consoleSpy.called).to.be.true
      expect(consoleSpy.args[0][0]).to.include('error message')
      consoleSpy.restore()
    })
  })
  describe('#success', () => {
    it('should log success message', () => {
      const consoleSpy = sinon.spy(console, 'log')
      logger.warn('success message')
      expect(consoleSpy.called).to.be.true
      expect(consoleSpy.args[0][0]).to.include('success message')
      consoleSpy.restore()
    })
  })
  describe('#warn', () => {
    it('should log warning message', () => {
      const consoleSpy = sinon.spy(console, 'log')
      logger.warn('warning message')
      expect(consoleSpy.called).to.be.true
      expect(consoleSpy.args[0][0]).to.include('warning message')
      consoleSpy.restore()
    })
  })
})

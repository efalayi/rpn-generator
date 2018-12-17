import { expect } from 'chai'
import fsMock from 'mock-fs'
import ContactRepository from './contacts'

describe('#ContactRepository', () => {
  describe('#getPhoneNumbers', () => {
    it('should get phone numbers', async () => {
      const mockPhoneNumbers = ['123456789']
      fsMock({
        'server/data': {
          'contacts.json': JSON.stringify({
            phoneNumbers: mockPhoneNumbers
          }),
        }
      })
      const retrievedPhoneNumbers = await ContactRepository.getPhoneNumbers()
      expect(retrievedPhoneNumbers[0]).to.include(mockPhoneNumbers[0])
      fsMock.restore()
    })
  })
})

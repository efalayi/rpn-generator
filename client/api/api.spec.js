import api from './api'

describe('#api', () => {
  describe('#getPhoneNumbers', () => {
    it('should get generated phone numbers from server', async () => {
      const sampleData = ['0123456789']
      fetch.mockResolvedValueOnce({
        json: jest.fn(() => ({
          phoneNumbers: sampleData
        }))
      })
      const { phoneNumbers } = await api.getPhoneNumbers()
      expect(phoneNumbers).toHaveLength(sampleData.length)
      expect(phoneNumbers[0]).toEqual(sampleData[0])
    })

    it('should return error if an a server error occurred', async () => {
      fetch.mockRejectedValueOnce({
        json: jest.fn(() => new Error('Server error'))
      })
      const { phoneNumbers } = await api.getPhoneNumbers()
      expect(phoneNumbers).toBeUndefined()
    })
  })
})

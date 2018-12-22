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
      const response = await api.getPhoneNumbers()
      expect(response.phoneNumbers).toHaveLength(sampleData.length)
      expect(response.phoneNumbers[0]).toEqual(sampleData[0])
    })

    it('should return error if an a server error occurred', async () => {
      fetch.mockRejectedValueOnce({
        json: jest.fn(() => new Error('Server error'))
      })
      const response = await api.getPhoneNumbers()
      expect(response.phoneNumbers).toBeUndefined()
    })
  })

  describe('#generateNewPhoneNumbers', () => {
    it('should get new generated phone numbers from server', async () => {
      const sampleData = ['0123456789']
      fetch.mockResolvedValueOnce({
        json: jest.fn(() => ({
          newPhoneNumbers: sampleData
        }))
      })
      const response = await api.generateNewPhoneNumbers()
      expect(response.newPhoneNumbers).toHaveLength(sampleData.length)
      expect(response.newPhoneNumbers[0]).toEqual(sampleData[0])
    })

    it('should return error if an a server error occurred', async () => {
      fetch.mockRejectedValueOnce({
        json: jest.fn(() => new Error('Server error'))
      })
      const response = await api.generateNewPhoneNumbers()
      expect(response.newPhoneNumbers).toBeUndefined()
    })
  })
})

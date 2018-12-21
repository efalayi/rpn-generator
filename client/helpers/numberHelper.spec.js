import NumberHelper from './numberHelper'

describe('#NumberHelper', () => {
  describe('#getPhoneNumbersCount', () => {
    it('should return length of phone numbers array', () => {
      const count = NumberHelper.getPhoneNumbersCount([])
      expect(count).toEqual(0)
    })
  })
  describe('#sortPhoneNumbers', () => {
    it('should return a sorted phone numbers array in ascending order', () => {
      const phoneNumbers = [3, 2, 3, 4]
      const sortedPhoneNumbers = NumberHelper.sortPhoneNumbers(phoneNumbers)
      expect(sortedPhoneNumbers).not.toEqual(phoneNumbers)
    })
    it('should return a sorted phone numbers array in descending order', () => {
      const phoneNumbers = [3, 2, 3, 4]
      const sortedPhoneNumbers = NumberHelper.sortPhoneNumbers(phoneNumbers, 'dsc')
      expect(sortedPhoneNumbers).not.toEqual(phoneNumbers)
    })
  })

  describe('#getMaxPhoneNumber', () => {
    it('should return highest phone number in array', () => {
      const phoneNumbers = [3, 2, 3, 4]
      const maxNumber = NumberHelper.getMaxPhoneNumber(phoneNumbers)
      expect(phoneNumbers).toContain(maxNumber)
    })
  })

  describe('#getMinPhoneNumber', () => {
    it('should return lowest phone number in array', () => {
      const phoneNumbers = [3, 2, 3, 4]
      const minNumber = NumberHelper.getMinPhoneNumber(phoneNumbers)
      expect(phoneNumbers).toContain(minNumber)
    })
  })
})

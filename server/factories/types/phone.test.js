import { expect } from 'chai'
import phone from './phone'

describe('#phone', () => {
  it('should create a phone number with defined digits', () => {
    const phoneNumber = phone(3)
    expect(phoneNumber).to.have.lengthOf(3)
  })
})

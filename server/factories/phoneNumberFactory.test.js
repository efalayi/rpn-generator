import { assert, expect } from 'chai'
import PhoneNumberFactory from './phoneNumberFactory'

describe('#PhoneNumberFactory', () => {
  it('should have a type and name', () => {
    expect(PhoneNumberFactory.name).to.equal('Phone Number Factory')
    expect(PhoneNumberFactory.type).to.equal('phone')
  })
  it('should have Factory methods', () => {
    assert.isDefined(PhoneNumberFactory.getFactoryName)
    assert.isDefined(PhoneNumberFactory.build)
    assert.isDefined(PhoneNumberFactory.buildList)
  })
})

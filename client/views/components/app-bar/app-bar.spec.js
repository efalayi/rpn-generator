import React from 'react'
import { shallow } from 'enzyme'
import AppBar from './app-bar.jsx'

const props = {
  generatePhoneNumbers: jest.fn(),
  totalPhoneNumbers: 3
}

const expectedTitleString = `Total Phone Numbers: ${props.totalPhoneNumbers}`

describe('#AppBar component', () => {
  describe('without props', () => {
    const component = shallow(<AppBar />)
    it('should not render a title with accurate number of phone numbers', () => {
      const { children: titleElement } = component.childAt(1).props()
      expect(titleElement).not.toEqual(expectedTitleString)
    })
  })

  describe('with props', () => {
    const component = shallow(<AppBar {...props} />)
    it('should render a title with accurate number of phone numbers', () => {
      const { children: titleElement } = component.childAt(1).props()
      expect(titleElement).toEqual(expectedTitleString)
    })
  })
})

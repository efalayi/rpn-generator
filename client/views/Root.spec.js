import React from 'react'
import { shallow } from 'enzyme'
import Root from './Root'

describe('#Root', () => {
  it('should render without crashing', () => {
    const componentWrapper = shallow(<Root />)
    expect(componentWrapper).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import ActionResults from './result-panel.jsx'

describe('#ActionResults Component', () => {
  it('should render with no props', () => {
    const component = shallow(<ActionResults />)
    const componentProps = component.props()
    expect(componentProps).toHaveProperty('className', 'result-panel container')
  })

  it('should render with defined props', () => {
    const results = [
      {
        name: 'Simple Test',
        value: 'Test ran'
      }
    ]
    const component = shallow(<ActionResults results={results} />)
    const componentProps = component.props()
    expect(componentProps).toHaveProperty('className', 'result-panel container')
    expect(componentProps).toHaveProperty('children')
    expect(componentProps.children).toHaveLength(results.length)
  })
})

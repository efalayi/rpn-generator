import React from 'react'
import { shallow } from 'enzyme'
import ControlPanel from './controlPanel'

describe('#ControlPanel Component', () => {
  it('should render without props', () => {
    const component = shallow(<ControlPanel />)
    const componentProps = component.props()
    expect(componentProps).toHaveProperty('className', 'control-panel')
  })

  describe('with props', () => {
    const actions = [
      {
        name: 'Sort ASC',
        handler: jest.fn()
      },
      {
        name: 'Sort DSC',
        handler: jest.fn()
      },
      {
        name: 'Find Max',
        handler: jest.fn()
      },
      {
        name: 'Find Min',
        handler: jest.fn()
      }
    ]
    const component = shallow(<ControlPanel actions={actions} />)
    const componentProps = component.props()
    it('should render without crashing', () => {
      expect(componentProps.children).toHaveLength(actions.length)
    })
  })
})

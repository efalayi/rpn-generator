import React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

describe('#Button Component', () => {
  it('should render without props', () => {
    const component = shallow(<Button />)
    const compononentProps = component.props()
    expect(component.name()).toEqual('button')
    expect(compononentProps).toHaveProperty('type')
  })

  it('should render with props', () => {
    const component = shallow(
      <Button
        name="Button Test"
        type="reset"
        handleClick={jest.fn()}
      />
    )
    const compononentProps = component.props()
    expect(component.name()).toEqual('button')
    expect(compononentProps).toHaveProperty('type', 'reset')
  })
})

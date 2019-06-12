import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import ControlPanel from '../components/controlPanel'
import ResultPanel from '../components/resultPanel'
import NumberGrid from '../components/numberGrid'

const props = {
  totalPhoneNumbers: 3,
  phoneNumbers: ['0867647905', '0654421897', '0436789564'],
  controlPanelActions: [
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
  ],
  resultPanelValues: [
    {
      name: 'Max',
      value: '0654421897'
    },
    {
      name: 'Min',
      value: '0436789564'
    }
  ]
}
describe('#App', () => {
  describe('without props', () => {
    const appContainerWithoutProps = shallow(<App />)
    expect(appContainerWithoutProps.prop('phoneNumbers')).toBeUndefined()
    expect(appContainerWithoutProps.prop('totalPhoneNumbers')).toBeUndefined()
    expect(appContainerWithoutProps.prop('controlPanelActions')).toBeUndefined()
    expect(appContainerWithoutProps.prop('resultPanelValues')).toBeUndefined()
  })

  describe.only('with props', () => {
    const appContainerWithProps = shallow(<App {...props} />)
    it('should should have a control panel', () => {
      const controlPanel = appContainerWithProps.find(ControlPanel).render()
      expect(controlPanel).toHaveLength(1)
      expect(controlPanel.children()).toHaveLength(props.controlPanelActions.length)
    })
    it('should should have a result panel', () => {
      const resultPanel = appContainerWithProps.find(ResultPanel).render()
      expect(resultPanel).toHaveLength(1)
      expect(resultPanel.children()).toHaveLength(props.resultPanelValues.length)
    })
    it('should should render a NumberGrid component', () => {
      const numberGrid = appContainerWithProps.find(NumberGrid).render()
      const numbers = numberGrid.find('.numbers')
      expect(numbers.children()).toHaveLength(props.phoneNumbers.length)
    })
  })
})

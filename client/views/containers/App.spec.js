import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import ControlPanel from '../components/controlPanel'
import ResultPanel from '../components/resultPanel'
import Table from '../components/table'

const props = {
  totalCount: 3,
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
  describe('with props', () => {
    const appContainerWithoutProps = shallow(<App />)
    expect(appContainerWithoutProps.prop('phoneNumbers')).toBeUndefined()
    expect(appContainerWithoutProps.prop('totalCount')).toBeUndefined()
    expect(appContainerWithoutProps.prop('controlPanelActions')).toBeUndefined()
    expect(appContainerWithoutProps.prop('resultPanelValues')).toBeUndefined()
  })

  describe('with props', () => {
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
    it('should should render a Table component', () => {
      const table = appContainerWithProps.find(Table).render()
      const tableBodyRows = table.find('tbody tr')
      expect(table).toHaveLength(1)
      expect(table.children()).toHaveLength(2)
      expect(tableBodyRows).toHaveLength(props.phoneNumbers.length)
    })
  })
})

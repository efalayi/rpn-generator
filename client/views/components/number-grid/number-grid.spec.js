import React from 'react'
import { shallow } from 'enzyme'
import NumberGrid from './number-grid.jsx'

describe('#NumberGrid component', () => {
  describe('without props', () => {
    const component = shallow(<NumberGrid />)
    it('should not render numbers in a grid', () => {
      const { children: gridItems } = component.find('.grid-item').props()
      expect(gridItems).toHaveLength(0)
    })
  })

  describe('with props', () => {
    const tableData = ['Sample Data']
    const component = shallow(<NumberGrid tableData={tableData} />)
    it('should render numbers in a grid: ', () => {
      const gridItems = component.find('.number-grid .grid-item')
      expect(gridItems).toHaveLength(tableData.length)
    })
  })
})

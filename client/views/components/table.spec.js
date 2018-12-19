import React from 'react'
import { shallow } from 'enzyme'
import Table from './table'

describe('#Table Component', () => {
  describe('without props', () => {
    const component = shallow(<Table />)
    const componentProps = component.props()
    it('should render', () => {
      expect(componentProps.children).toHaveLength(2)
    })
    it('should have a table header element', () => {
      expect(component.find('thead')).toHaveLength(1)
    })
    it('should have a table body element', () => {
      expect(component.find('tbody')).toHaveLength(1)
    })
  })

  describe('with props', () => {
    const tableHeaderColumns = ['Table Test']
    const tableData = ['Sample Data']
    const component = shallow(
      <Table tableHeaderColumns={tableHeaderColumns} tableData={tableData} />
    )
    it('should render table header with tableHeaderColumns value', () => {
      const headerRows = component.find('thead tr')
      expect(headerRows.children()).toHaveLength(tableHeaderColumns.length)
      expect(headerRows.childAt(0).type()).toEqual('th')
      expect(headerRows.childAt(0).text()).toEqual(tableHeaderColumns[0])
    })

    it('should render table body with tableData value', () => {
      const tableBody = component.find('tbody')
      const tableBodyRow = component.find('tbody tr')
      expect(tableBody.children()).toHaveLength(tableData.length)
      expect(tableBody.childAt(0).type()).toEqual('tr')
      expect(tableBodyRow.children()).toHaveLength(2)
      expect(tableBodyRow.childAt(1).type()).toEqual('td')
      expect(tableBodyRow.childAt(1).text()).toEqual(tableData[0])
    })
  })
})

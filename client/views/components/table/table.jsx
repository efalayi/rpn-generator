import React from 'react'
import PropTypes from 'prop-types'

import '../../../scss/components/tables.scss'

const Table = (props) => {
  const { tableData, tableHeaderColumns } = props
  return (
    <table>
      <thead>
        <tr>
          {
            tableHeaderColumns.map(value => (
              <th key={value}>{value}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          tableData.map((value, index) => (
            <tr key={value}>
              <td>{index + 1}</td>
              <td>{value}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

Table.defaultProps = {
  tableData: [],
  tableHeaderColumns: []
}

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.string),
  tableHeaderColumns: PropTypes.arrayOf(PropTypes.string)
}

export default Table

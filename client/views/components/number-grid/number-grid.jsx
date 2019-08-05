import React from 'react'
import PropTypes from 'prop-types'

import '../../../scss/components/number-grid.scss'

const COLORS = ['purple', 'purple-dark', 'yellow', 'orange', 'pink']

const getBackgroundColor = (numberIndex) => {
  const [defaultColor] = COLORS
  const numberOfCOlors = COLORS.length
  const colorIndex = numberIndex > numberOfCOlors ? numberIndex - numberOfCOlors : numberIndex

  return COLORS[colorIndex] || defaultColor
}

const NumberGrid = (props) => {
  const { tableData } = props
  return (
    <div className="grid grid-item number-grid">
      {
        tableData.map((value, index) => {
          const backgroundColorClassName = getBackgroundColor(index)
          return (
            <div
              key={value}
              className={`grid-item ${backgroundColorClassName}`}
            >
              <span>{value}</span>
            </div>
          )
        })
      }
    </div>
  )
}

NumberGrid.defaultProps = {
  tableData: []
}

NumberGrid.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.string)
}

export default NumberGrid

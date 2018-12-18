import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/components/result-panel.scss'

const ActionResults = (props) => {
  const { results } = props
  return (
    <div className="result-panel container">
      {
        results.map(result => (
          <div className="one-half column" key={result.name}>
            <div className="flex-container flex-center">
              <span>{result.name}</span>
              <span>{result.value}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

ActionResults.defaultProps = {
  results: []
}

ActionResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any
  }))
}

export default ActionResults

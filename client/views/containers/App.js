/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NumberGrid from '../components/number-grid/number-grid.jsx'
import ControlPanel from '../components/control-panel/control-panel.jsx'
import ResultPanel from '../components/result-panel/result-panel.jsx'
import AppBar from '../components/app-bar/app-bar.jsx'

class App extends Component {
  render() {
    const {
      totalPhoneNumbers, phoneNumbers,
      controlPanelActions, resultPanelValues,
      generatePhoneNumbers
    } = this.props
    return (
      <div className="container flex flex-column flex-center">
        <h3>Random Phone Number Generator</h3>
        <AppBar
          totalPhoneNumbers={totalPhoneNumbers}
          generatePhoneNumbers={generatePhoneNumbers}
        />
        <ControlPanel actions={controlPanelActions} />
        <ResultPanel results={resultPanelValues} />
        <NumberGrid
          tableData={phoneNumbers}
          tableHeaderColumns={['#', 'Phone Number']}
        />
      </div>
    )
  }
}

App.propTypes = {
  totalPhoneNumbers: PropTypes.number.isRequired,
  phoneNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  controlPanelActions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    handler: PropTypes.func
  })).isRequired,
  generatePhoneNumbers: PropTypes.func.isRequired,
  resultPanelValues: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any
  })).isRequired
}

export default App

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from '../components/table.jsx'
import ControlPanel from '../components/controlPanel.jsx'
import ResultPanel from '../components/resultPanel.jsx'

class App extends Component {
  render() {
    const {
      totalCount, phoneNumbers,
      controlPanelActions, resultPanelValues
    } = this.props
    return (
      <div id="root" className="container flex-container flex-column flex-center">
        <h2>Random Phone Number Generator</h2>
        <div>
          <h5>{`Total Count: ${totalCount}`}</h5>
        </div>
        <ControlPanel actions={controlPanelActions} />
        <ResultPanel results={resultPanelValues} />
        <Table
          tableData={phoneNumbers}
          tableHeaderColumns={['#', 'Phone Number']}
        />
      </div>
    )
  }
}

App.propTypes = {
  totalCount: PropTypes.number.isRequired,
  phoneNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  controlPanelActions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    handler: PropTypes.func
  })).isRequired,
  resultPanelValues: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any
  })).isRequired
}

export default App

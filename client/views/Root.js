import React, { Component } from 'react'
import api from '../api/api'
import NumberHelper from '../helpers/numberHelper'
import App from './containers/App'

class Root extends Component {
  constructor() {
    super()
    this.state = {
      phoneNumbers: [],
      maxNumber: '',
      minNumber: '',
    }
  }

  componentDidMount() {
    this.getPhoneNumbers()
  }

  async getPhoneNumbers() {
    const { phoneNumbers } = await api.getPhoneNumbers()
    this.setState(() => ({
      phoneNumbers: phoneNumbers || []
    }))
  }

  generateNewPhoneNumbers = async () => {
    const { newPhoneNumbers } = await api.generateNewPhoneNumbers()
    this.setState(() => ({
      phoneNumbers: newPhoneNumbers,
      minNumber: '',
      maxNumber: ''
    }))
  }

  handleAscSort = () => {
    const { phoneNumbers } = this.state
    const sortedPhoneNumbers = NumberHelper.sortPhoneNumbers(phoneNumbers, 'asc')
    this.setState(() => ({
      phoneNumbers: sortedPhoneNumbers
    }))
  }

  handleDescSort = () => {
    const { phoneNumbers } = this.state
    const sortedPhoneNumbers = NumberHelper.sortPhoneNumbers(phoneNumbers, 'dsc')
    this.setState(() => ({
      phoneNumbers: sortedPhoneNumbers
    }))
  }

  handleFindMax = () => {
    const { phoneNumbers } = this.state
    const maxNumber = NumberHelper.getMaxPhoneNumber(phoneNumbers)
    this.setState(() => ({
      maxNumber
    }))
  }

  handleFindMin = () => {
    const { phoneNumbers } = this.state
    const minNumber = NumberHelper.getMinPhoneNumber(phoneNumbers)
    this.setState(() => ({
      minNumber
    }))
  }

  render() {
    const { maxNumber, minNumber, phoneNumbers } = this.state
    const totalPhoneNumbers = NumberHelper.getPhoneNumbersCount(phoneNumbers)
    const actions = [
      {
        name: 'Sort Ascending',
        handler: this.handleAscSort
      },
      {
        name: 'Sort Descending',
        handler: this.handleDescSort
      },
      {
        name: 'Find Max',
        handler: this.handleFindMax
      },
      {
        name: 'Find Min',
        handler: this.handleFindMin
      }
    ]
    const results = [
      {
        name: 'Maximum Number',
        value: maxNumber
      },
      {
        name: 'Minimum Number',
        value: minNumber
      },
    ]
    return (
      <App
        phoneNumbers={phoneNumbers}
        maxNumber={maxNumber}
        minNumber={minNumber}
        totalPhoneNumbers={totalPhoneNumbers}
        controlPanelActions={actions}
        resultPanelValues={results}
        generatePhoneNumbers={this.generateNewPhoneNumbers}
      />
    )
  }
}

export default Root

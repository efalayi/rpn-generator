import React from 'react'
import ReactTestRendrer from 'react-test-renderer'
import Root from './Root'
import api from '../api/api'
import NumberHelper from '../helpers/numberHelper'

jest.mock('../api/api')

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
      value: '0867647905'
    },
    {
      name: 'Min',
      value: '0436789564'
    }
  ]
}

describe('#Root', () => {
  describe('with undefined phone numbers', () => {
    api.getPhoneNumbers = jest.fn(() => ({
      error: new Error()
    }))
    const componentWrapper = ReactTestRendrer.create(<Root />)
    const componentInstance = componentWrapper.getInstance()
    it('should have a defined state', () => {
      expect(componentInstance.state).toHaveProperty('phoneNumbers', [])
      expect(componentInstance.state).toHaveProperty('maxNumber', '')
      expect(componentInstance.state).toHaveProperty('minNumber', '')
    })
  })
  describe('with defined phone numbers', () => {
    api.getPhoneNumbers = jest.fn(() => ({
      phoneNumbers: props.phoneNumbers
    }))
    const componentWrapper = ReactTestRendrer.create(<Root />)
    const componentTree = componentWrapper.toJSON()
    it('should render without crashing', () => {
      const componentInstance = componentWrapper.getInstance()
      expect(componentTree).toMatchSnapshot()
      expect(componentInstance.state).toHaveProperty('phoneNumbers', props.phoneNumbers)
      expect(componentInstance.state).toHaveProperty('maxNumber', '')
      expect(componentInstance.state).toHaveProperty('minNumber', '')
    })

    it('should update maxNumber in state when findMax is clicked', () => {
      const componentRoot = componentWrapper.root
      const findMaxButton = componentRoot.findByProps({
        className: 'find-max'
      })
      findMaxButton.props.handleClick()
      const componentState = componentWrapper.getInstance().state
      expect(componentState.maxNumber).toEqual('0867647905')
    })

    it('should update minNumber in state when findMin is clicked', () => {
      const componentRoot = componentWrapper.root
      const findMinButton = componentRoot.findByProps({
        className: 'find-min'
      })
      findMinButton.props.handleClick()
      const componentState = componentWrapper.getInstance().state
      expect(componentState.minNumber).toEqual('0436789564')
    })

    it('should sort phone numbers in ascending order when Sort Ascending button is clicked', () => {
      const componentRoot = componentWrapper.root
      const phoneNumbersInAscendingOrder = NumberHelper.sortPhoneNumbers(props.phoneNumbers, 'asc')
      const sortAscButton = componentRoot.findByProps({
        className: 'sort-ascending'
      })
      sortAscButton.props.handleClick()
      const componentState = componentWrapper.getInstance().state
      expect(componentState.phoneNumbers).toEqual(phoneNumbersInAscendingOrder)
    })

    it('should sort phone numbers in descending order when Sort Descending button is clicked', () => {
      const componentRoot = componentWrapper.root
      const phoneNumbersInDescendingOrder = NumberHelper.sortPhoneNumbers(props.phoneNumbers, 'dsc')
      const sortAscButton = componentRoot.findByProps({
        className: 'sort-descending'
      })
      sortAscButton.props.handleClick()
      const componentState = componentWrapper.getInstance().state
      expect(componentState.phoneNumbers).toEqual(phoneNumbersInDescendingOrder)
    })

    it('should generate new phoneNumbers when Generate New Numbers button is clicked', () => {
      api.generateNewPhoneNumbers = jest.fn(() => ({
        newPhoneNumbers: ['012345678932', '04562378194']
      }))
      const generateNewPhoneNumbersSpy = jest.spyOn(api, 'generateNewPhoneNumbers')
      const componentRoot = componentWrapper.root
      const generateNewNumbersButton = componentRoot.findByProps({
        className: 'solid generate-new-numbers'
      })
      generateNewNumbersButton.props.onClick()
      expect(generateNewPhoneNumbersSpy).toHaveBeenCalled()
      expect(generateNewPhoneNumbersSpy).toHaveBeenCalledTimes(1)
      generateNewPhoneNumbersSpy.mockRestore()
    })
  })
})

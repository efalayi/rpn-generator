import React from 'react'
import PropTypes from 'prop-types'
import Button from './button.jsx'
import '../../scss/components/app-bar.scss'

const AppBar = (props) => {
  const { generatePhoneNumbers, totalPhoneNumbers } = props
  return (
    <div className="app-bar">
      <h5>{`Total Phone Numbers: ${totalPhoneNumbers}`}</h5>
      <Button buttonClassName="solid" name="Generate New Numbers" type="button" handleClick={generatePhoneNumbers} />
    </div>
  )
}

AppBar.propTypes = {
  generatePhoneNumbers: PropTypes.func.isRequired,
  totalPhoneNumbers: PropTypes.number.isRequired
}

export default AppBar

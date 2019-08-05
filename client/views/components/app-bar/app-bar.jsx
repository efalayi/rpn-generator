import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button.jsx'
import '../../../scss/components/app-bar.scss'

const AppBar = (props) => {
  const { generatePhoneNumbers, totalPhoneNumbers } = props
  return (
    <div className="container app-bar">
      <Button
        buttonClassName="solid generate-new-numbers"
        name="Generate New Numbers"
        type="button"
        handleClick={generatePhoneNumbers}
        // iconName="face"
      />
      <h6>{`Total Phone Numbers: ${totalPhoneNumbers}`}</h6>
    </div>
  )
}

AppBar.propTypes = {
  generatePhoneNumbers: PropTypes.func.isRequired,
  totalPhoneNumbers: PropTypes.number.isRequired
}

export default AppBar

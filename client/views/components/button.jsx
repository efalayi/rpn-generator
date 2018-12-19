import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/components/buttons.scss'

const Button = (props) => {
  const { handleClick, name, type } = props
  return (
    <button type={type} onClick={handleClick}>
      {name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func
}

Button.defaultProps = {
  name: 'Button',
  type: 'button',
  handleClick: null
}

export default Button

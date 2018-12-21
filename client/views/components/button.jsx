import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/components/buttons.scss'

const Button = (props) => {
  const {
    buttonClassName, handleClick, name, type
  } = props
  return (
    <button className={buttonClassName} type={type} onClick={handleClick}>
      {name}
    </button>
  )
}

Button.propTypes = {
  buttonClassName: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func
}

Button.defaultProps = {
  buttonClassName: '',
  name: 'Button',
  type: 'button',
  handleClick: null
}

export default Button

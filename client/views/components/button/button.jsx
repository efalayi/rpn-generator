import React from 'react'
import PropTypes from 'prop-types'
import '../../../scss/components/buttons.scss'

const renderIcon = (iconName) => {
  if (iconName) {
    return (
      <span>
        <i className="material-icons">face</i>
      </span>
    )
  }
  return null
}

const Button = (props) => {
  const {
    buttonClassName, handleClick, name, type, iconName
  } = props
  return (
    <button className={buttonClassName} type={type} onClick={handleClick}>
      { renderIcon(iconName) }
      {name}
    </button>
  )
}

Button.propTypes = {
  buttonClassName: PropTypes.string,
  iconName: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func
}

Button.defaultProps = {
  buttonClassName: '',
  iconName: '',
  name: 'Button',
  type: 'button',
  handleClick: null
}

export default Button

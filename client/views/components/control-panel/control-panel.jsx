import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button.jsx'
import '../../../scss/components/control-panel.scss'

const ControlPanel = (props) => {
  const { actions } = props
  return (
    <div className="container control-panel">
      {
        actions.map((action) => {
          const className = action.name.toLowerCase().replace(/ /gi, '-')
          return (
            <Button
              key={action.name}
              name={action.name}
              type="button"
              handleClick={action.handler}
              className={className}
            />
          )
        })
      }
    </div>
  )
}

ControlPanel.defaultProps = {
  actions: []
}

ControlPanel.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    handler: PropTypes.func
  }))
}

export default ControlPanel

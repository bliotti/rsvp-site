import React from 'react'
import PropTypes from 'prop-types'

const GuestName = props =>
  props.isEditing ? (
    <input
      type="text"
      value={props.children}
      onChange={props.handleNameEdits}
    />
  ) : (
    <span>{props.children}</span>
  )

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdits: PropTypes.func.isRequired
}

export default GuestName

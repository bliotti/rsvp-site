import React from 'react'
import PropTypes from 'prop-types'

const GuestName = props =>
  props.isEditing ? (
    <input type="text" value={props.children} />
  ) : (
    <span>{props.children}</span>
  )

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired
}

export default GuestName

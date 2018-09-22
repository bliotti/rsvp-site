import React from 'react'
import PropTypes from 'prop-types'

const PendingGuest = props =>
  props.name ? (
    <li className="pending">
      <span>{props.name}</span>
    </li>
  ) : null

PendingGuest.propTypes = {
  name: PropTypes.string
}

export default PendingGuest

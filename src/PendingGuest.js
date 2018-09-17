import React from 'react'
import PropTypes from 'prop-types'

const PendingGuest = ({ name }) =>
  name ? (
    <li className="pending">
      <span>{name}</span>
    </li>
  ) : null

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired
}

export default PendingGuest

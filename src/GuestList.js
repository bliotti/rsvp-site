import React from 'react'
import PropTypes from 'prop-types'
import { map, addIndex } from 'ramda'
import Guest from './Guest'

const GuestList = props => (
  <ul>
    {addIndex(map)(
      (guest, index) => (
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          handleConfirmation={() => props.toggleConfirmationAt(index)}
        />
      ),
      props.guests
    )}
  </ul>
)

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired
}

export default GuestList

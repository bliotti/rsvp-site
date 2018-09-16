import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'ramda'

const GuestList = props => (
  <div>
    <ul>
      {map(
        (guest, index) => (
          <li key={index}>
            <span>{guest.name}</span>
            <label>
              <input type="checkbox" checked={guest.isConfirmed} /> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
          </li>
        ),
        props.guests
      )}
    </ul>
  </div>
)

GuestList.PropTypes = {
  guests: PropTypes.array.isRequired
}

export default GuestList

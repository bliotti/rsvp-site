import React, { Component } from 'react'
import './App.css'
import GuestList from './GuestList'
import { map, merge, addIndex, curry } from 'ramda'

class App extends Component {
  state = {
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false
      },
      {
        name: 'Nick',
        isConfirmed: true
      },
      {
        name: 'Brian',
        isConfirmed: true
      }
    ]
  }

  toggleConfirmationAt = indexToChange =>
    this.setState({
      guests: addIndex(map)(
        (guest, index) =>
          index === indexToChange
            ? merge(guest, { isConfirmed: !guest.isConfirmed }) // OR {...guest, isConfirmed: !guest.isConfirmed }
            : guest,
        this.state.guests
      )
    })

  getTotalInvited = () => this.state.guests.length
  // getAttendingGuests = () =>
  // getUnconformedGuests = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>Brian Liotti's Example App</p>
          <form>
            <input
              type="text"
              // value="Safia"
              placeholder="Invite Someone"
            />
            <button
              type="submit"
              name="submit"
              // value="submit"
            >
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
          />
        </div>
      </div>
    )
  }
}

export default App

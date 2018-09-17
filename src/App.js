import React, { Component } from 'react'
import './App.css'
import GuestList from './GuestList'
import { map, merge, addIndex } from 'ramda'

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nick',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Brian',
        isConfirmed: true,
        isEditing: true
      }
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: addIndex(map)(
        (guest, index) =>
          index === indexToChange
            ? merge(guest, { [property]: !guest[property] }) // OR {...guest, isConfirmed: !guest.isConfirmed }
            : guest,
        this.state.guests
      )
    })

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt('isConfirmed', index)

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    })

  toggleEditingAt = index => this.toggleGuestPropertyAt('isEditing', index)

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: addIndex(map)(
        (guest, index) =>
          index === indexToChange ? { ...guest, name } : guest,
        this.state.guests
      )
    })

  toggleFilter = () =>
    this.setState({
      isFiltered: !this.state.isFiltered
    })

  handleNameInput = e =>
    this.setState({
      pendingGuest: e.target.value
    })

  newGuestSubmitHandler = () =>
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ''
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

          <form
            onSubmit={e => {
              e.preventDefault()
              this.newGuestSubmitHandler
            }}
          >
            <input
              type="text"
              value={this.state.pendingGuest}
              onChange={this.handleNameInput}
              placeholder="Invite Someone"
            />

            <button
              type="submit"
              name="submit"
              value={this.state.pendingGuest}
              onClick={this.newGuestSubmitHandler}
            >
              Submit
            </button>
          </form>
        </header>

        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              />
              Hide those who haven't responded
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
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    )
  }
}

export default App

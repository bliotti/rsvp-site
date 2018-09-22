import React, { Component } from 'react'
import './App.css'

import { map, merge, addIndex } from 'ramda'

import Header from './Header'
import MainContent from './MainContent'

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [
      {
        name: 'Charlie',
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
        isEditing: false
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

  newGuestSubmitHandler = e => {
    e.preventDefault()
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
  }

  getTotalInvited = () => this.state.guests.length

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    )

  render() {
    const totalInvited = this.getTotalInvited()
    const numberAttending = this.getAttendingGuests()
    const numberUnconfirmed = totalInvited - numberAttending
    return (
      <div className="App">
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
        />
        <MainContent
          onChange={this.toggleFilter}
          checked={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    )
  }
}

export default App

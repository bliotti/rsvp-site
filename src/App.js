import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
            <input type="text" value="Safia" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">
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
          <ul>
            <li className="pending">
              <span>Safia</span>
            </li>
            <li className="responded">
              <span>Iver</span>
              <label>
                <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
            <li className="responded">
              <span>Corrina</span>
              <label>
                <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
            <li>
              <span>Joel</span>
              <label>
                <input type="checkbox" /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App

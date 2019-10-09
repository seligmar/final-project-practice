import React from 'react'
import MapFragment from './Map'

class GetInvolved extends React.Component {
  state = {
    events: [],
    showMap: false,
    showInfo: false,
    user: false
  }

  getEvents = () => {
    return fetch('http://localhost:3001/events') // events url
      .then(resp => resp.json())
      .then(events => this.setState({ events }))
  }

  loggedIn = () => {
    if (this.props.username !== '') {
      this.setState({ user: true })
    }
  }

  showInfo = () => {
    this.setState({ showInfo: true })
  }

  callGoogleAPI = e => {}

  render () {
    return (
      <div className='buttons'>
        <button onClick={() => this.showInfo()}>Who Represents Me?</button>
        {this.state.showInfo ? (
          <form onSubmit={e => this.callGoogleAPI(e)} className='input-form'>
            <div style={{ paddingBottom: '10px' }} class='field'>
              <label>Where Do You Live?</label>
              <input
                style={{ width: 200 }}
                type='text'
                name='username'
                placeholder='username'
              />
              <input
                style={{ width: 200 }}
                type='text'
                name='username'
                placeholder='username'
              />
              <input
                style={{ width: 200 }}
                type='text'
                name='username'
                placeholder='username'
              />
              <button class='ui button' type='submit'>
                Start Game
              </button>
            </div>
          </form>
        ) : null}

        <div className='map-element'>
          <MapFragment events={this.state.events} getEvents={this.getEvents} />
        </div>
      </div>
    )
  }
}

export default GetInvolved

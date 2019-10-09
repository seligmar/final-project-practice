import React from 'react'
import MapFragment from './Map'
import EnterAddressForm from './EnterAddressForm'

class GetInvolved extends React.Component {
  state = {
    events: [],
    showEvent: false,
    showMap: false,
    getRepInfo: false,
    user: false
  }

  getEvents = () => {
    return fetch('http://localhost:3001/events') // events url
      .then(resp => resp.json())
      .then(events => this.setState({ events }, this.showEvent()))
  }

  showEvent = () => this.setState({ showEvent: true })

  showMap = () => this.setState({ showMap: !this.state.showMap })

  loggedIn = () => {
    if (this.props.username !== '') {
      this.setState({ user: true })
    }
  }

  showInfo = () => {
    this.setState({ getRepInfo: true })
  }

  callGoogleAPI = e => {}

  render () {
    return (
      <div className='other'>
        <button className='button' onClick={() => this.showInfo()}>
          Who Represents Me?
        </button>
        <button className='button' onClick={() => this.getEvents()}>
          Show All Events
        </button>
        {this.state.showEvent ? (
          <button className='button' onClick={() => this.showMap()}>
            Show All Events On The Map!
          </button>
        ) : null}
        {this.state.getRepInfo ? (
          <EnterAddressForm callGoogleAPI={this.callGoogleAPI} />
        ) : null}
        <div className='map-element'>
          <MapFragment
            showMap={this.state.showMap}
            events={this.state.events}
          />
        </div>
      </div>
    )
  }
}

export default GetInvolved

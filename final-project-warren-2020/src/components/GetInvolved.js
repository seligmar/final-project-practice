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

  render () {
    return <MapFragment events={this.state.events} getEvents={this.getEvents} />
  }
}

export default GetInvolved

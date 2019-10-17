import React from 'react'
import MapFragment from './Map'
import ListEvents from './ListEvents'
import UserIndex from './UserIndex'
import { Link } from 'react-router-dom'
import API from '../API'
import NewEvent from './NewEvent'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const GOOGLE_API_KEY = 'AIzaSyBuNd5baj7zHX5OmBtTYoBkhW_a4WN81S8'

class GetInvolved extends React.Component {
  state = {
    events: [],
    showEvent: false,
    showMap: false,
    user: false,
    newUser: false,
    createEvent: false
  }

  createEventState = () => {
    this.setState({ createEvent: !this.state.createEvent })
  }

  getEvents = () => API.getEvents().then(events => this.setState({ events }, this.showEvent))

  showEvent = () => this.setState({ showEvent: true })

  showMap = () => this.setState({ showMap: !this.state.showMap })

  componentDidMount() {
    this.getEvents()
  }

  rsvp = (e, key) => {
    e.preventDefault()
    if (!this.props.username) {
      MySwal.fire({
        text: 'Please log in to RSVP',
        type: 'error',
        confirmButtonColor: '#b61b28'
      })
    }
    else {
      const rsvpTo = {
        event_id: key,
        username: this.props.username
      }
      API.rsvp(rsvpTo)
        .then(data => {
          if (data.error) {
            this.responseGif(data.error)
          } else
            this.thanksGif()
        })
    }
  }

  thanksGif = () => {
    MySwal.fire({
      text: 'Thank you for joining the team! We look forward to seeing you soon!',
      type: 'success'
    })
  }

  responseGif = (response) => {
    MySwal.fire({
      title: 'Please try again',
      text: `${response}`,
      confirmButtonColor: '#b61b28',
      animation: false
    })
  }

  render() {
    return (
      <div>
        <Link to="/donate/elizabethwarren2020" target="_top">
          <div className='donationsBar'>
            <h1 className="giving-text">Give Now</h1></div>
        </Link>
        {this.props.username ? (
          <button className='button' onClick={() => this.createEventState()}>
            Create Event</button>) : null}
        <div className='map-element'>
          <MapFragment
            showMap={this.state.showMap}
            events={this.state.events}
          />
        </div>
        {
          this.state.showMap ? (
            <button className='button' onClick={() => this.showMap()}>
              Hide Map
          </button>
          ) : (<button className='button' onClick={() => this.showMap()}>
            Show Map
      </button>)
        }
        {
          this.state.createEvent ? (
            <NewEvent user={this.props.username}
              hideForm={this.createEventState} />
          ) : null
        }
        {
          this.state.showEvent ? (
            <ListEvents events={this.state.events} rsvp={this.rsvp} />
          ) : null
        }

      </div>
    )
  }
}

export default GetInvolved

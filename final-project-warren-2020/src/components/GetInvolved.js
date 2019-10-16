import React from 'react'
import MapFragment from './Map'
import EnterAddressForm from './EnterAddressForm'
import ShowReps from './ShowReps'
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
    getRepInfo: false,
    user: false,
    reps: [],
    renderReps: false,
    newUser: false,
    createEvent: false
  }

  createEventState = () => {
    this.setState({ createEvent: true })
  }


  getEvents = () => API.getEvents().then(events => this.setState({ events }, this.showEvent))

  showEvent = () => this.setState({ showEvent: true })

  showMap = () => this.setState({ showMap: !this.state.showMap })

  componentDidMount() {
    this.getEvents()
  }

  showInfo = () => {
    this.setState({ getRepInfo: true })
  }

  /// move to sho reps! this iz v messy 
  callGoogleAPI = e => {
    e.preventDefault()
    const address = []
    let newAddress = []
    const line1 = e.target.addressLine1.value
    const city = e.target.city.value
    const state = e.target.state.value
    const zip = e.target.zip.value
    newAddress = address.concat(
      line1.replace(/[^\w ]/, '').split(' '),
      city.replace(/[^\w ]/, '').split(' '),
      state.replace(/[^\w ]/, '').split(' '),
      zip.replace(/[^\w ]/, '').split(' ')
    )
    this.getRepsFromAPI(newAddress.join('+'))
  }

  getRepsFromAPI = data => {
    return fetch(
      `https://www.googleapis.com/civicinfo/v2/representatives?address=${data}&includeOffices=true&key=${GOOGLE_API_KEY}`
    )
      .then(resp => resp.json())
      .then(reps => this.setState({ reps }))
      .then(() => this.setState({ renderReps: true }))
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
        {this.props.showDonationsBar ? (
          <div className='maybe-later' onClick={e => this.props.closeGive(e)}>Maybe Later</div>
        ) : null
        }
        {
          this.props.showDonationsBar ? (
            <Link to="/donate/elizabethwarren2020" target="_top">
              <div className='donationsBar-new' onClick={e => this.props.resetDonationsBar(e)}>
                <h1 className="giving-text">Give Now</h1></div>
            </Link>
          ) : null
        }
        < div className='other' >
          <button className='button' onClick={() => this.showInfo()}>
            Who Represents Me?
        </button>
          {this.props.username ? (
            <button className='button' onClick={() => this.createEventState()}>
              Create Event
          </button>) : null}
          {this.state.renderReps ?
            <ShowReps reps={this.state.reps} /> : null}
          <div className='map-element'>
            <MapFragment
              showMap={this.state.showMap}
              events={this.state.events}
            />
          </div>
          {
            this.state.showEvent ? (
              <button className='button' onClick={() => this.showMap()}>
                Show All Events On The Map!
          </button>
            ) : null
          }
          {
            this.state.createEvent ? (
              <NewEvent user={this.props.username} />
            ) : null
          }
          {
            this.state.showEvent ? (
              <ListEvents events={this.state.events} rsvp={this.rsvp} />
            ) : null
          }
          {
            this.state.getRepInfo ? (
              <EnterAddressForm callGoogleAPI={this.callGoogleAPI} />
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default GetInvolved

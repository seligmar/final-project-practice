import React from 'react'
import MapFragment from './Map'
import EnterAddressForm from './EnterAddressForm'
import ShowReps from './ShowReps'
import ListEvents from './ListEvents'
import UserIndex from './UserIndex'
import { Link } from 'react-router-dom'


const GOOGLE_API_KEY = 'AIzaSyBuNd5baj7zHX5OmBtTYoBkhW_a4WN81S8'

class GetInvolved extends React.Component {
  state = {
    events: [],
    showEvent: false,
    showMap: false,
    getRepInfo: false,
    user: false,
    reps: [],
    renderReps: false
  }

  getEvents = () => {
    return fetch('http://localhost:3001/events') // events url
      .then(resp => resp.json())
      .then(events => this.setState({ events }, this.showEvent))
  }

  showEvent = () => this.setState({ showEvent: true })

  showMap = () => this.setState({ showMap: !this.state.showMap })

  loggedIn = () => {
    if (this.props.username !== '') {
      this.setState({ user: true })
    }
  }

  componentDidMount() {
    this.getEvents()
  }
  showInfo = () => {
    this.setState({ getRepInfo: true })
  }

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

  render() {
    return (
      <div>
        {this.props.showDonationsBar ? (
          <div className='maybe-later' onClick={e => this.props.closeGive(e)}>Maybe Later</div>
        ) : null
        }
        {
          this.props.showDonationsBar ? (
            <Link to="/donate/elizabethwarren2020">
              <div className='donationsBar-new' onClick={e => this.props.resetDonationsBar(e)}>
                <h1 className="giving-text">Give Now</h1></div>
            </Link>
          ) : null
        }
        <div className='other'>
          <button className='button' onClick={() => this.showInfo()}>
            Who Represents Me?
        </button>
          <button className='button' onClick={() => this.getEvents()}>
            Show All Events
        </button>
          {this.state.renderReps ? <ShowReps reps={this.state.reps} /> : null}
          <div className='map-element'>
            <MapFragment
              showMap={this.state.showMap}
              events={this.state.events}
            />
          </div>
          {this.state.showEvent ? (
            <button className='button' onClick={() => this.showMap()}>
              Show All Events On The Map!
          </button>
          ) : null}
          {this.state.showEvent ? (
            <ListEvents events={this.state.events} />
          ) : null}
          {this.state.getRepInfo ? (
            <EnterAddressForm callGoogleAPI={this.callGoogleAPI} />
          ) : null}
          <UserIndex />
        </div>
      </div>
    )
  }
}

export default GetInvolved

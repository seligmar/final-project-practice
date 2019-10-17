import React from 'react'
import { Link } from 'react-router-dom'
import EnterAddressForm from './EnterAddressForm'
import ShowReps from './ShowReps'

const GOOGLE_API_KEY = 'AIzaSyBuNd5baj7zHX5OmBtTYoBkhW_a4WN81S8'

class FindMyReps extends React.Component {

  state = {
    reps: [],
    renderReps: false,
    getRepInfo: false
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
        <Link to="/donate/elizabethwarren2020" target="_top">
          <div className='donationsBar'>
            <h1 className="giving-text">Give Now</h1></div>
        </Link>
        {this.state.renderReps ? <ShowReps reps={this.state.reps} /> : null}
        <EnterAddressForm callGoogleAPI={this.callGoogleAPI} />
      </div>
    )
  }
}

export default FindMyReps
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
        <EnterAddressForm callGoogleAPI={this.callGoogleAPI} />
        {this.state.renderReps ? <ShowReps reps={this.state.reps} /> : null}
        <div className='reps-background'>
          <div className='image-box-green'>
            <img className='bio-img-1' src="https://www.ocregister.com/wp-content/uploads/migration/ok5/ok5ku6-gettyimages632318210.jpg?w=620" />
          </div>
          <h3 style={{
            'margin-left': '10%',
            'margin-right': '10%'
          }}>“We come here to stand shoulder to shoulder to make clear: We are here. We will not be silent. We will not play dead. We will fight for what we believe in.”
        </h3>
          <h3>—Elizabeth Warren speaking at the Women’s March in Boston</h3>
        </div>
      </div>

    )
  }
}

export default FindMyReps
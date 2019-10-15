import React from 'react'
import API from '../API'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

//const GOOGLE_PLACES_KEY = 'AIzaSyDpRaLIaHJgxBNviHGRnUTfeN5WAuXafX4'

const GOOGLE_API_KEY = 'AIzaSyBuNd5baj7zHX5OmBtTYoBkhW_a4WN81S8'

class NewEvent extends React.Component {

  newEvent = e => {
    e.preventDefault()
    if (!this.props.user) {
      MySwal.fire({
        text: 'Please log in to create a new event',
        type: 'error',
        confirmButtonColor: '#b61b28'
      })
    }
    else {
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
      const titleUpCase = e.target.title.value
      const start = e.target.start.value
      const end = e.target.end.value
      const eventData = {
        title: titleUpCase.toUpperCase(),
        start_time: start,
        // + ':' + '00',
        end_time: end,
        // + ':' + '00',
        street_address_1: line1,
        city: city,
        state: state,
        zip: zip,
        day: e.target.day.value,
        month: e.target.month.value,
        year: e.target.year.value
      }
      this.getLatLngFromAPI(eventData, newAddress.join('+'))
    }
  }

  getLatLngFromAPI = (event, address) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_KEY}`)
      .then(resp => resp.json())
      .then(data => this.parseAPI(event, data))
  }

  parseAPI = (event, data) => {
    const lat = data["results"]["0"]["geometry"]["location"]["lat"]
    const lng = data["results"]["0"]["geometry"]["location"]["lng"]
    const coordinates = {
      lat: lat,
      lng: lng
    }
    this.mergeInfo(event, coordinates)
  }

  mergeInfo = (event, coordinates) => {
    const newEvent = Object.assign(event, coordinates)
    this.postEvent(newEvent)
  }

  postEvent = event => {
    API.newEvent(event)
      .then(data => {
        if (data.error) {
          this.responseGif(data.error)
        } else {
          console.log(data)
        }
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
      <div className='login' >
        <form onSubmit={e => this.newEvent(e)} className='ui form'>
          <div style={{ paddingBottom: '10px' }} class='field'>
            <p>Join the fight with Liz!</p>
            <label>Let Us Know What You Have Planned!</label>
            <input
              style={{ width: 200 }}
              type='text'
              name='title'
              placeholder='Event Title'
            />
            <label>Start Time</label>
            <input
              style={{ width: 200 }}
              type='text'
              name='start'
              placeholder='Start Time 00:00'
            />
            <label>End Time</label>
            <div class="fields">
              <div class="two wide field"></div>
              <input
                style={{ width: 200 }}
                type='text'
                name='end'
                placeholder='End Time 00:00'
              />
              <input
                style={{ width: 200 }}
                type='text'
                name='day'
                placeholder='DD'
              /></div>
            <div class="fields">
              <div class="two wide field"></div>
              <input
                style={{ width: 200 }}
                type='text'
                name='month'
                placeholder='MM'
              /> </div>
            <div class="fields">
              <div class="four wide field"></div>
              <input
                style={{ width: 200 }}
                type='text'
                name='year'
                placeholder='YYYY'
              /></div>
            <label>Please Enter the Address Where the Event Will Occor:</label>
            <input
              style={{ width: 200 }}
              type='text'
              name='addressLine1'
              placeholder='address line 1'
            />
            <input
              style={{ width: 200 }}
              type='text'
              name='city'
              placeholder='city'
            />
            <input
              style={{ width: 200 }}
              type='text'
              name='state'
              placeholder='State Abreviation'
            />
            <input
              style={{ width: 200 }}
              type='text'
              name='zip'
              placeholder='Zip Code'
            />
            <button className='ui button' type='submit'>Submit</button>
          </div>
        </form>
      </div >
    )
  }
}


export default NewEvent
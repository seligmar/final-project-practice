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
      if (start.length !== 5 || !start.includes(":", 2)
        || typeof (parseInt(start[0])) !== 'number' || typeof (parseInt(start[0])) >= 3
        || typeof (parseInt(start[1])) !== 'number'
        || typeof (parseInt(start[3])) !== 'number'
        || typeof (parseInt(start[4])) !== 'number') {
        MySwal.fire({
          title: 'Please format the start time 00:00',
          confirmButtonColor: '#b61b28',
          animation: false
        })
        return
      }
      const end = e.target.end.value
      if (end.length !== 5 || !end.includes(":", 2)
        || typeof (parseInt(end[0])) !== 'number' || typeof (parseInt(end[0])) >= 3
        || typeof (parseInt(end[1])) !== 'number'
        || typeof (parseInt(end[3])) !== 'number'
        || typeof (parseInt(end[4])) !== 'number') {
        MySwal.fire({
          title: 'Please format the end time 00:00',
          confirmButtonColor: '#b61b28',
          animation: false
        })
        return
      }
      const day = e.target.day.value
      if (day.length !== 2
        || typeof (parseInt(day[0])) !== 'number'
        || typeof (parseInt(day[1])) !== 'number') {
        MySwal.fire({
          title: 'Please format the date DD',
          confirmButtonColor: '#b61b28',
          animation: false
        })
        return
      }
      const month = e.target.month.value
      if (month.length !== 2
        || typeof (parseInt(month[0])) !== 'number'
        || typeof (parseInt(month[1])) !== 'number') {
        MySwal.fire({
          title: 'Please format the month MM',
          confirmButtonColor: '#b61b28',
          animation: false
        })
        return
      }
      const year = e.target.year.value
      if (year.length !== 4
        || typeof (parseInt(year[0])) !== 'number'
        || typeof (parseInt(year[1])) !== 'number'
        || typeof (parseInt(year[2])) !== 'number'
        || typeof (parseInt(year[3])) !== 'number'
        || year !== ("2020" || "2019")) {
        MySwal.fire({
          title: 'Please format the year YYYY',
          confirmButtonColor: '#b61b28',
          animation: false
        })
        return
      }
      if (zip.length !== 5
        || typeof (parseInt(zip[0])) !== 'number'
        || typeof (parseInt(zip[1])) !== 'number'
        || typeof (parseInt(zip[2])) !== 'number'
        || typeof (parseInt(zip[3])) !== 'number'
        || typeof (parseInt(zip[4])) !== 'number') {
        MySwal.fire({
          title: 'Please re-enter the zipcode',
          confirmButtonColor: '#b61b28',
          animation: false
        })
        return
      }
      const eventData = {
        title: titleUpCase.toUpperCase(),
        start_time: start,
        end_time: end,
        street_address_1: line1,
        city: city,
        state: state,
        zip: zip,
        day: day,
        month: month,
        year: year
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
          throw Error(data.error)
        } else {
          this.thanksGif()
        }
      }).catch(error => {
        this.responseGif(error)
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

  thanksGif = () => {
    MySwal.fire({
      text: 'Thank you for your support! Your contribution will help us strengthen our Democracy!',
      type: 'success'
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
            <div class="fields">
              <div class="two wide field"></div>
              <input
                style={{ width: 200 }}
                type='text'
                name='start'
                placeholder='Start Time 00:00'
              /></div>
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
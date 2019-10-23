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

      // if (day.length !== 2
      //   || typeof (parseInt(day[0])) !== 'number'
      //   || typeof (parseInt(day[1])) !== 'number') {
      //   MySwal.fire({
      //     title: 'Please format the date DD',
      //     confirmButtonColor: '#b61b28',
      //     animation: false
      //   })
      //   return
      // }
      // if (month.length !== 2
      //   || typeof (parseInt(month[0])) !== 'number'
      //   || typeof (parseInt(month[1])) !== 'number') {
      //   MySwal.fire({
      //     title: 'Please format the month MM',
      //     confirmButtonColor: '#b61b28',
      //     animation: false
      //   })
      //   return
      const day1 = e.target.date.value
      const date = day1.substring(8)
      const year = day1.slice(0, 4)
      const month = day1.slice(5, 7)
      const compareDate = month + date + year
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
      const yyyy = today.getFullYear()
      const todaySDATE = yyyy + mm + dd
      if (year < yyyy || (
        (month <= mm) && (date <= dd)
      )) {
        MySwal.fire({
          title: 'Please enter a date after today',
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
        day: date,
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
          this.props.hideForm()
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
    const buttons = {
      'background-color': '#b61b28',
      color: '#fff',
      'margin-top': '3%'
    }

    const formHeader = {
      'margin-bottom': '2%',
      'text-decoration': 'underline'
    }
    const formHeader2 = {
      'margin-top': '3%',
      'margin-bottom': '2%',
      'text-decoration': 'underline'
    }
    const formPadding = {
      padding: '2%',
      'margin-top': '3%',
      'margin-bottom': '3%',
    }

    return (
      <div style={{ 'margin-top': '2%', }} className='event-login'>
        <div class='event-field'>
          <div className='form-border'>
            <form onSubmit={e => this.newEvent(e)} className='ui form' style={formPadding}>
              <div style={formHeader}>Let Us Know What You Have Planned!</div>
              <label>Title:{' '} </label>
              <input
                type='text'
                name='title'
                placeholder='Event Title'
              />
              <label>Start Time</label>
              <input
                type='text'
                name='start'
                placeholder='Start Time 00:00'
              />
              <label>End Time</label>
              <input
                type='text'
                name='end'
                placeholder='End Time 00:00'
              />  <br></br><br></br>
              <label>Event Date: </label>
              <input
                type='date'
                name='date'
                min="2019-10-17"
                max="2020-11-03"
              /><br></br>
              <div style={formHeader2}>Please Enter the Address Where the Event Will Occor:</div>
              <label>Address: </label>
              <input
                type='text'
                name='addressLine1'
                placeholder='Address'
              />
              <label>City: </label>
              <input
                type='text'
                name='city'
                placeholder='City'
              />
              <label>State: </label>
              <input
                type='text'
                name='state'
                placeholder='State Abreviation'
              />
              <label>Zip: </label>
              <input

                type='text'
                name='zip'
                placeholder='Zip Code'
              />
              <button className='fluid ui button' style={buttons} type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div >
    )
  }
}


export default NewEvent
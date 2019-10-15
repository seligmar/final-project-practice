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
      const eventData = {
        title: e.target.title,
        start_time: e.target.start_time,
        end_time: e.target.end_time,
        address_line_1: line1,
        city: city,
        state: state,
        zip: zip,
        day: e.target.day,
        month: e.target.month,
        year: e.target.year
      }
      this.getLatLngFromAPI(newAddress.join('+'))
      this.mergeInfo(eventData)
    }
  }

  getLatLngFromAPI = address => {
    debugger
    return <div></div>
  }

  mergeInfo = (eventData) => {
    const allInfo = eventData

  }

  postEvent = event => {
    API.newEvent()
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
              type='time'
              name='start-time'
              placeholder='Start Time'
            />
            <label>End Time</label>
            <input
              style={{ width: 200 }}
              type='time'
              name='end-time'
              placeholder='End Time'
            />
            <input
              style={{ width: 200 }}
              type='text'
              name='day'
              placeholder='DD'
            />
            <input
              style={{ width: 200 }}
              type='text'
              name='month'
              placeholder='MM'
            />
            <input
              style={{ width: 200 }}
              type='text'
              name='year'
              placeholder='YYYY'
            />
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
      </div>
    )
  }
}


export default NewEvent
import React from 'react'
import API from '../API'

//const GOOGLE_PLACES_KEY = 'AIzaSyDpRaLIaHJgxBNviHGRnUTfeN5WAuXafX4'

const GOOGLE_API_KEY = 'AIzaSyBuNd5baj7zHX5OmBtTYoBkhW_a4WN81S8'

class NewEvent extends React.Component {


  createEvent = e => {
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
    this.getLatLngFromAPI(newAddress.join('+'))
  }

  getLatLngFromAPI(address) => {
  return
}

createEvent(event) => {
  API.post()
}

return (
  <div className='login' >
    <form onSubmit={e => props.newEvent(e)} className='ui form'>
      <div style={{ paddingBottom: '10px' }} class='field'>
        <p>Join the fight with Liz!</p>
        <label>Where Do You Live?</label>
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
      </div>
    </form>
  </div>
)
}


export default NewEvent
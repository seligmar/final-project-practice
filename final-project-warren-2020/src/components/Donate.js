import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class Donate extends React.Component {

  donateNew = e => {
    const total = parseInt(e.target.parentElement.childNodes[16].childNodes[1].value)
    return fetch('http://localhost:3001/donate', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        // user_id: user_id, //this needs to be user_id 
        total: total
      })
    }).then(resp => resp.json())
      .then(resp => console.log(resp))
  }

  responseGif = (response) => {
    MySwal.fire({
      imageUrl: 'https://media.giphy.com/media/rYEAkYihZsyWs/giphy.gif',
      imageWidth: 300,
      imageHeight: 200,
      confirmButtonText: 'Next!',
      background: '#090526',
      imageAlt: 'Bob Ross',
      padding: '.25em',
      confirmButtonColor: 'cornflowerblue',
      width: 300,
      animation: false
    })
  }

  render() {
    return (
      <div className='login'>
        <form class="ui form" >
          <div>Name</div>
          <label>First Name</label>
          <input type="text" name="name" placeholder="First Name" />
          <label>Last Name</label>
          <input type="text" name="surname" placeholder="Last Name" />
          <label>Address</label>
          <input type="text" name="address" placeholder="Street Address" />
          <div class="four wide field">
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="state" placeholder="State" />
            <input type="text" name="zip" placeholder="Zip" />
          </div >
          <div> Billing Information</div>
          <div class="seven wide field">
            <label>Card Number</label>
            <input type="text" name="cardnumber" maxlength="16" placeholder="Card #" />
          </div>
          <div class="three wide field">
            <label>CVC</label>
            <input type="text" name="cvc" maxlength="3" placeholder="CVC" />
          </div>
          <label>Expiration</label>
          <div class="two fields">
            <div class="field">
              <select class="ui fluid search dropdown" name="expire-month">
                <option value="">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div></div>
          <input type="text" name="expire-year" maxlength="4" placeholder="Year" />
          <br></br><br></br>
          <div class="seven wide field">
            <label>Total:  </label>
            <input type="text" name="total" maxlength="7" placeholder="total" /></div>
          <br></br>
          <div class="button" onClick={(e) => this.donateNew(e)}>Donate Now</div>
          <br></br><br></br>
        </form>
      </div>
    )
  }
}

export default Donate
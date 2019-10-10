import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

class Donate extends React.Component {

  donateNew = e => {
    return fetch('http://localhost:3001/donate', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        // user_id: user_id, //this needs to be user_id 
        password: e.target.total.value
      })
    }).then(resp => resp.json())
  }


  render() {
    return (
      <div className='login'>
        <form class="ui form">
          <div class="field">
            <label>Address</label>
            <div class="fields">
              <div class="twelve wide field">
                <input type="text" name="address" placeholder="Street Address" />
              </div>
              <div class="four wide field">
                <input type="text" name="address-2" placeholder="Apt #" />
              </div >
            </div >
          </div >
          < h4 class="ui dividing header" > Billing Information</h4 >
          <div class="fields">
            <div class="seven wide field">
              <label>Card Number</label>
              <input type="text" name="card[number]" maxlength="16" placeholder="Card #" />
            </div>  </div>
          <div class="three wide field">
            <label>CVC</label>
            <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC" />
          </div>
          < div class="six wide field" >
            <label>Expiration</label></div >
          <div class="two fields">
            <div class="field">
              <select class="ui fluid search dropdown" name="card[expire-month]">
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
          <div class="field">
            <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year" />
          </div>
          <div class="ui button" tabindex="0">Submit Order</div>
        </form>
      </div>
    )
  }
}

export default Donate
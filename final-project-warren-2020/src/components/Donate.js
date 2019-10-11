import React from 'react'
import ReactPlayer from 'react-player'
import UserIndex from './UserIndex'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

class Donate extends React.Component {

  donateNew = e => {
    e.preventDefault()
    if (!this.props.username) {
      MySwal.fire({
        text: 'Please log in to donate',
        type: 'error',
        confirmButtonColor: '#b61b28'
      })
    }
    else {
      const donation = {
        username: this.props.username,
        total: parseInt(e.target.parentElement.childNodes[15].childNodes[1].value)
      }
      this.postDonation(donation)
    }
  }

  postDonation = donation => {
    return fetch('http://localhost:3001/donate', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: donation.username,
        total: donation.total
      })
    }).then(resp => resp.json())
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

  thanksGif = (message) => {
    MySwal.fire({
      text: 'Thank you for your generosity! Your contribution will help us strengthen our Democracy!',
      type: 'success'
    })
    this.props.history.push('/elizabethwarren2020')
  }

  responseGif = (response) => {
    MySwal.fire({
      title: 'Please try again',
      text: `${response}`,
      confirmButtonColor: '#b61b28',
      animation: false,
      html:
        'Please refer to the ' +
        '<a href="https://www.fec.gov/resources/cms-content/documents/contribution_limits_chart_2019-2020.pdf" target="_blank">FEC</a> ' +
        'for more information on campaign contribution limits'
    })
  }

  render() {
    return (
      <div >
        <div>
          <h2>THE TIME FOR SMALL IDEAS IS OVER</h2>
          We're fighting for big, structural change, and we're counting on grassroots donors to make it possible.
          Even $3 makes a difference.
        </div>
        < div className='donation-page'>
          <div className='login'>
            <div>
              <form class="ui form">
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
                <div onClick={(e) => this.donateNew(e)} class="button">Donate Now</div>
                <br></br><br></br>
              </form>
            </div>
          </div>
          <div className='FEC'>
            <p className='FEC-rules'>Contribution rules:</p>
            <p>I am a U.S. citizen or lawfully admitted permanent resident (i.e., green card holder).</p>
            <p>This contribution is made from my own funds, and funds are not being provided to me by another person or entity for the purpose of making this contribution.</p>
            <p>I am making this contribution with my own personal credit card and not with a corporate or business credit card or a card issued to another person.</p>
            <p>I am at least eighteen years old.</p>
            <p>I am not a federal contractor.</p>
            <p>This contribution is not made from the funds of a political action committee.</p>
            <p>I am not an executive of a fossil fuel company.</p>
            <p>I am not a registered Federal lobbyist.</p>
            <p>I am not an executive of a health insurance or pharmaceutical company.</p>
            <p>I am not a registered foreign agent.</p>
            <p>Contributions or gifts to ActBlue are not deductible as charitable contributions for Federal income tax purposes.</p>
          </div >
        </div>
      </div >
    )
  }
}

export default Donate
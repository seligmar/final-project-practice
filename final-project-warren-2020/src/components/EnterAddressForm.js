import React from 'react'

const EnterAddressForm = props => {
  const buttons = {
    // border: '1%',
    'background-color': '#b61b28',
    color: '#fff'
  }

  const formPadding = {
    padding: '5%'
  }

  return (
    <div className='login'>
      <div class='field'>
        <form onSubmit={e => props.callGoogleAPI(e)} class='ui form' style={formPadding}>
          {/*  className='input-form'> */}
          <h4>Where Do You Live?</h4>
          <label>Address: </label>
          <input
            style={{ width: 200 }}
            type='text'
            name='addressLine1'
            placeholder='address line 1'
          />  <br></br>
          <label>City: </label>
          <input
            style={{ width: 200 }}
            type='text'
            name='city'
            placeholder='city'
          />  <br></br>
          <label>State: </label>
          <input
            style={{ width: 200 }}
            type='text'
            name='state'
            placeholder='State Abreviation'
          />   <br></br>
          <label>Zip: </label>
          <input
            style={{ width: 200 }}
            type='text'
            name='zip'
            placeholder='Zip Code'
          />
          <br></br>
          <div className='rep-button'>
            <button className='small ui button' style={buttons} type='submit'>
              Find Who Represents Me
        </button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default EnterAddressForm

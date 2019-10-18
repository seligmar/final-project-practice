import React from 'react'

const EnterAddressForm = props => {
  const buttons = {
    'background-color': '#b61b28',
    color: '#fff'
  }

  const formPadding = {
    padding: '2%'
  }

  const border = {
    'border-color': '#b7e4cf',
    'border-width': '1px'
  }

  const formHeader = {
    'margin-bottom': '2%',
    'text-decoration': 'underline'
  }

  return (
    <div className='login'>
      <div class='field'>
        <div className='form-border'>
          <div style={border}>
            <form onSubmit={e => props.callGoogleAPI(e)} class='ui form' style={formPadding}>
              {/*  className='input-form'> */}
              <div style={formHeader}>Where Do You Live?</div>
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

              <div className='rep-button'>
                <button className='fluid ui button' style={buttons} type='submit'>
                  Find Who Represents Me
        </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default EnterAddressForm

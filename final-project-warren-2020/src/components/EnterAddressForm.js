import React from 'react'

const EnterAddressForm = props => {
  return (
    <form onSubmit={e => props.callGoogleAPI(e)} className='input-form'>
      <div style={{ paddingBottom: '10px' }} class='field'>
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
          name='addressLine2'
          placeholder='address line 2'
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
        <button class='button' type='submit'>
          Find Who Represents Me
        </button>
      </div>
    </form>
  )
}

export default EnterAddressForm

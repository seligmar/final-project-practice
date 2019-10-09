import React from 'react'

const NewSupporter = props => {
  return (
    <form onSubmit={e => props.LogInNewUser(e)} className='ui form'>
      <div style={{ paddingBottom: '10px' }} class='field'>
        <label>Create a username:</label>
        <input
          style={{ width: 200 }}
          type='text'
          name='username'
          placeholder='username'
        />
      </div>
      <label>Create your password:</label>
      <input
        style={{ width: 200 }}
        type='password'
        name='password'
        placeholder='password'
      /> <label>Provide your email address:</label>
      <input
        style={{ width: 200 }}
        type='text'
        name='email'
        placeholder='email address' />
      <button class='ui button' type='submit'>
        Become a Supporter!
      </button>
    </form>
  )
}

export default NewSupporter

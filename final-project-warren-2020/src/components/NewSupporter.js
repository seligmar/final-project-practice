import React from 'react'

const NewSupporter = props => {
  return (
    <div className='login'>
      <form onSubmit={e => props.LogInNewUser(e)} className='ui form'>
        <div style={{ paddingBottom: '10px' }} class='field'>
          <p>Join the fight with Liz!</p>
          <label>Please Enter Your Name:</label>
          <input
            style={{ width: 200 }}
            type='text'
            name='username'
            placeholder='username'
          />
          <br></br>
          <label>Create Your Password:</label>
          <input
            style={{ width: 200 }}
            type='password'
            name='password'
            placeholder='password'
          />
          <br></br>
          <label>Provide your email address:</label>
          <input
            style={{ width: 200 }}
            type='text'
            name='email'
            placeholder='email address' />
          <br></br>
          <button class='event-button' type='submit'>
            Become a Supporter!
      </button>
          <button className='event-button' onClick={() => props.HideLogIn()}>Hide Login</button>
        </div>
      </form>
    </div>
  )
}

export default NewSupporter

import React from 'react'

const NewSupporter = props => {
  const xButton = {
    position: 'relative',
    left: '48.5%',
    top: '0%'
  }

  const buttons = {
    'background-color': '#b61b28',
    color: '#fff',
    'border-color': '#232444'
  }

  const formHeader = {
    'margin-bottom': '2%',
    'text-decoration': 'underline'
  }

  return (
    <div className='login'>
      <div class='field'>
        <form onSubmit={e => props.LogInNewUser(e)} className='ui form'>
          <button style={xButton} onClick={() => props.HideLogIn()}>X</button>
          <div style={formHeader}> Join the fight with Liz!</div>
          <label>Please Enter Your Name: </label>
          <input
            type='text'
            name='username'
            placeholder='username'
          />
          <label>Create Your Password: </label>
          <input
            type='password'
            name='password'
            placeholder='password'
          />
          <label>Provide your email address: </label>
          <input
            type='text'
            name='email'
            placeholder='email address' />
          <div className='buttons-create-user'>
            {/* <div className='ui buttons'> */}
            <button className='fluid ui button' style={buttons} type='submit'>
              Become a Supporter!</button>
          </div>
        </form>
      </div >
    </div >
  )
}

export default NewSupporter

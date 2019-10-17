import React from 'react'

const NewSupporter = props => {
  const xButton = {
    position: 'relative',
    left: '48.5%',
    top: '0%'
  }

  const buttons = {
    // border: '1%',
    'background-color': '#b61b28',
    color: '#fff',
    'border-color': '#232444'
  }

  return (
    <div className='login'>
      <div class='field'>
        <form onSubmit={e => props.LogInNewUser(e)} className='ui form'>
          <button style={xButton} onClick={() => props.HideLogIn()}>X</button>
          <p>Join the fight with Liz!</p>
          <label>Please Enter Your Name: </label>
          <input
            style={{ width: 200 }}
            type='text'
            name='username'
            placeholder='username'
          />
          <br></br>
          <label>Create Your Password: </label>
          <input
            style={{ width: 200 }}
            type='password'
            name='password'
            placeholder='password'
          />
          <br></br>
          <label>Provide your email address: </label>
          <input
            style={{ width: 200 }}
            type='text'
            name='email'
            placeholder='email address' />
          <div className='buttons-create-user'>
            {/* <div className='ui buttons'> */}
            <button className='small ui button' style={buttons} type='submit'>
              Become a Supporter!</button>
          </div>
        </form>
      </div >
    </div >
  )
}

export default NewSupporter

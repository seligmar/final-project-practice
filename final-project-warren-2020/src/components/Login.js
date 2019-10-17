import React from 'react'

const Login = props => {
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
        <form onSubmit={e => props.logIn(e)} className='ui form'>
          <button style={xButton} onClick={() => props.HideLogIn()}>X</button>
          <p>Log In</p>
          <label>UserName: </label>
          <input
            style={{ width: 200 }}
            type='text'
            name='username'
            placeholder='username'
          />
          <br></br>
          <label>Password: </label>
          <input
            style={{ width: 200 }}
            type='password'
            name='password'
            placeholder='password'
          />
          <div className='buttons-login'>
            <div className='ui buttons'>
              <button className='small ui button' style={buttons} type='submit'>Log In</button>
              <button className='small ui button' style={buttons} onClick={(e) => props.showNewUserBar(e)}>Create A New Account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


export default Login

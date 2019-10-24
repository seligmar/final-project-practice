import React from 'react'

const Login = props => {
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
    'margin-bottom': '4%',
    'text-decoration': 'underline'
  }

  return (
    <div className='login'>
      <div class='field'>
        <div className='login-form-border'>
          <form onSubmit={e => props.logIn(e)} className='ui form'>
            <button style={xButton} onClick={() => props.HideLogIn()}>X</button>
            <div style={formHeader}>Log In</div>
            <label>UserName: </label>
            <input
              type='text'
              name='username'
              placeholder='username'
            />
            <label>Password: </label>
            <input
              type='password'
              name='password'
              placeholder='password'
            />
            <div className='buttons-login'>
              <div className='two ui buttons'>
                <button className='ui button' style={buttons} type='submit'>Log In</button>
                <button className='ui button' style={buttons} onClick={(e) => props.showNewUserBar(e)}>Create A New Account</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Login

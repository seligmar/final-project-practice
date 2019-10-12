import React from 'react'

const Login = props => {
  return (
    <div className='login'>
      <form onSubmit={e => props.logIn(e)} className='ui form'>
        <div style={{ paddingBottom: '10px' }} class='field'>
          <p>Log In</p>
          <label>UserName:</label>
          <input
            style={{ width: 200 }}
            type='text'
            name='username'
            placeholder='username'
          />
          <label>Password:</label>
          <input
            style={{ width: 200 }}
            type='password'
            name='password'
            placeholder='password'
          />
          <br></br> <br></br>
          <button className='event-button ' type='submit'>Log In</button><br></br><br></br>
          <button className='event-button' onClick={(e) => props.showNewUserBar(e)}>Create A New Account</button>
        </div>
      </form>
    </div>
  )
}


export default Login

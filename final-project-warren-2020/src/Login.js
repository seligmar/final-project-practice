import React from 'react'

const Login = props => {
  return (
    <form onSubmit={e => props.logIn(e)} className='ui form'>
      <div style={{ paddingBottom: '10px' }} class='field'>
        <label>Type in a username to start:</label>
        <input
          style={{ width: 200 }}
          type='text'
          name='username'
          placeholder='username'
        />
      </div>
      <label>Type in a password to start:</label>
      <input
        style={{ width: 200 }}
        type='password'
        name='password'
        placeholder='password'
      />
      <button class='ui button' type='submit'>
        Start Game
      </button>
    </form>
  )
}

export default Login

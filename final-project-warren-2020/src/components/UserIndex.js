import React from 'react'

import Login from './Login'
import NewSupport from './NewSupporter'

import API from '../API'

/// would it make more sense to move this to the landing page?
class UserIndex extends React.Component {
  state = {
    user: ''
    // password: ''
  }

  logIn = e => {
    e.preventDefault()
    this.setState(
      {
        user: e.target.username.value
        //  password: e.target.password.value
      },
      this.postNewUser(e)
    )
  }

  logInNewUser = e => {
    e.preventDefault()
    this.setState(
      {
        user: e.target.username.value
        //  password: e.target.password.value
      },
      this.createNewUser(e)
    )
  }

  postNewUser = e => {
    return fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      })
    }).then(resp => resp.json())
  }

  createNewUser = e => {
    return fetch('http://localhost:3001/new-supporter', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
        emailaddress: e.target.email.value
      })
    }).then(resp => resp.json())
  }

  render() {
    return (
      <div className='login'>
        <div>Log In</div>
        <Login logIn={this.logIn} />
        <div>Create A New User</div>
        <NewSupport LogInNewUser={this.logInNewUser} />
      </div>
    )
  }
}
export default UserIndex

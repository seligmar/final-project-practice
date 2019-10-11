import React from 'react'
import Login from './Login'
import NewSupport from './NewSupporter'

import API from '../API'

/// would it make more sense to move this to the landing page?
class UserIndex extends React.Component {
  state = {
    user: '',
    newUser: false
    // password: ''
  }

  logIn = e => {
    e.preventDefault()
    this.setState(
      {
        user: e.target.username.value
        //  password: e.target.password.value
      },
      this.LogInUser(e)
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

  LogInUser = e => {
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

  showNewUserBar = (e) => {
    e.preventDefault()
    this.setState({ newUser: true })
  }

  render() {
    return (
      <div>
        {this.props.loggedIn === false ?
          (<Login logIn={this.logIn} showNewUserBar={this.showNewUserBar} />) : null}
        <br></br>
        {this.state.newUser ? <NewSupport LogInNewUser={this.logInNewUser} /> : null}
      </div>
    )
  }
}
export default UserIndex

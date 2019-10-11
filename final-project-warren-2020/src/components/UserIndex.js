import React from 'react'
import Login from './Login'
import NewSupport from './NewSupporter'

import API from '../API'

/// would it make more sense to move this to the landing page?
class UserIndex extends React.Component {
  state = {
    newUser: false
  }

  logIn = e => {
    e.preventDefault()
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    this.props.userState(user)
    this.props.logIn()
    this.props.showLogIn()
    this.LogInUser(user)
  }

  logInNewUser = e => {
    e.preventDefault()
    const user = {
      username: e.target.username.value,
      password: e.target.password.value,
      emailaddress: e.target.email.value
    }
    this.props.userState(user)
    this.props.logIn()
    this.props.showLogIn()
    this.createNewUser(user)
  }

  LogInUser = user => {
    return fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    }).then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          console.log(data)
        }
      })
  }

  createNewUser = user => {
    return fetch('http://localhost:3001/new-supporter', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        emailaddress: user.email
      })
    }).then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          console.log(data)
        }
      })
  }

  showNewUserBar = (e) => {
    e.preventDefault()
    this.setState({ newUser: true })
  }

  render() {
    return (
      <div>
        {
          this.props.loggedIn === false ?
            (<Login logIn={this.logIn} showNewUserBar={this.showNewUserBar} />) : null
        }
        < br ></br >
        {this.state.newUser ? <NewSupport LogInNewUser={this.logInNewUser} /> : null}
      </div >
    )
  }
}
export default UserIndex

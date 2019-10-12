import React from 'react'
import Login from './Login'
import NewSupport from './NewSupporter'
import API from '../API'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
    this.LogInUser(user)
  }

  logInNewUser = e => {
    e.preventDefault()
    if (
      e.target.username.value === '' ||
      e.target.password.value === '' ||
      e.target.email.value === ''
    ) {
      MySwal.fire({
        title: 'Please try again',
        type: 'error',
        confirmButtonColor: '#b61b28',
        animation: false
      })
    }
    else {
      const user = {
        username: e.target.username.value,
        password: e.target.password.value,
        emailaddress: e.target.email.value
      }
      this.createNewUser(user)
    }
  }

  LogInUser = user => {
    API.signIn(user)
      .then(data => {
        if (data.error) {
          this.responseGif(data.error)
        } else {
          this.props.userState(data)
          this.props.logIn()
          this.props.showLogIn()
        }
      })
  }

  responseGif = (response) => {
    MySwal.fire({
      title: 'Please try again',
      text: `${response}`,
      confirmButtonColor: '#b61b28',
      animation: false
    })
  }

  createNewUser = user => {
    API.newUser(user)
      .then(data => {
        if (data.error) {
          throw Error(data.error)
        } else {
          this.props.userState(data)
          this.props.logIn()
          this.props.showLogIn()
        }
      }).catch(error => {
        this.responseGif(error)
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
          this.props.loggedIn === false && this.state.newUser === false ?
            (<Login logIn={this.logIn} showNewUserBar={this.showNewUserBar} />) : null
        }
        < br ></br >
        {this.state.newUser ? <NewSupport LogInNewUser={this.logInNewUser} /> : null}
      </div >
    )
  }
}
export default UserIndex

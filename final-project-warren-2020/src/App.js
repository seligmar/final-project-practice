import React from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './Login'
import NewSupport from './NewSupporter'
import API from './API'

// reminder to use sweet-alert
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { withRouter } from 'react-router-dom'

// const MySwal = withReactContent(Swal)

class App extends React.Component {
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
        password: e.target.password.value
      })
    }).then(resp => resp.json())
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Login logIn={this.logIn} />
          <NewSupport LogInNewUser={this.logInNewUser} />

          {/* MySwal.fire({
      imageUrl: 'https://media.giphy.com/media/h5AHEcNMhn7u8/giphy.gif',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Bob Ross',
      animation: false,
      confirmButtonText: 'Im done',
      background: '#090526',
      padding: '.25em',
      confirmButtonColor: 'cornflowerblue',
      width: 300
    }) */}

          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App

import React from 'react'
import './App.css'
import GetInvolved from './components/GetInvolved'
import { Route, Switch, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Donate from './components/Donate'
import UserIndex from './components/UserIndex'
import API from './API'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


class App extends React.Component {
  state = {
    donationsBar: true,
    username: '',
    loggedIn: false,
    showLogIn: false
  }

  resetDonationsBar = () => {
    this.setState({ donationsBar: !this.state.donationsBar })
  }

  closeGive = () => {
    this.setState({ donationsBar: !this.state.donationsBar })
  }

  logIn = () => {
    this.setState({ loggedIn: true })
  }

  showLogIn = () => {
    this.setState({ showLogIn: !this.state.showLogIn })
  }

  userState = user => {
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token)
  }

  logout = () => {
    this.setState({ showLogIn: !this.state.showLogIn })
    this.setState({ loggedIn: false })
    this.setState({ username: '' })
    localStorage.removeItem('token')
  }

  componentDidMount() {
    if (localStorage.getItem('token') !== undefined) {
      API.validate()
        .then(data => {
          if (data.error) {
          }
          else
            API.signIn(data)
              .then(data => {
                if (data.error) {
                  this.responseGif(data.error)
                } else {
                  this.userState(data)
                  this.logIn()
                  this.showLogIn()
                }
              })
        })
    }
  }

  responseGif = (response) => {
    MySwal.fire({
      title: 'Please try again',
      text: `${response}`,
      confirmButtonColor: '#b61b28',
      animation: false
    })
  }

  render() {
    return (
      <div className='App'>
        <div>
          {this.state.loggedIn ?
            <button className="button-login" onClick={() => this.logout()}>Log Out</button>
            : <button className="button-login" onClick={() => this.showLogIn()}>Log In</button>
          }
          {this.state.loggedIn ?
            <p>Welcome back, {this.state.username}! Thank you for your support!</p>
            : null}
          {/* any way to call up user donation and event info? 
        if donations total 20 or more s
        short of limit, ask to give $20 */}
          {this.state.showLogIn ?
            <UserIndex
              showLogIn={this.showLogIn}
              userState={this.userState}
              logIn={this.logIn}
              loggedIn={this.state.loggedIn}
            /> : null}
          <Switch>
            <Route path='/elizabethwarren2020' component={routerProps =>
              <Home {...routerProps}
                username={this.state.username}
                closeGive={this.closeGive}
                loggedIn={this.state.loggedIn}
                logIn={this.logIn}
                resetDonationsBar={this.resetDonationsBar}
                showDonationsBar={this.state.donationsBar} />} />
            <Route path='/getinvolved' component={routerProps =>
              <GetInvolved {...routerProps}
                username={this.state.username}
                closeGive={this.closeGive}
                loggedIn={this.state.loggedIn}
                logIn={this.logIn}
                resetDonationsBar={this.resetDonationsBar}
                showDonationsBar={this.state.donationsBar}
              />} />

            <Route path="/about/elizabethwarren2020" component={routerProps =>
              <About {...routerProps}
                closeGive={this.closeGive}
                logIn={this.logIn}
                username={this.state.username}
                loggedIn={this.state.loggedIn}
                resetDonationsBar={this.resetDonationsBar}
                showDonationsBar={this.state.donationsBar} />} />
            <Route path="/donate/elizabethwarren2020" component={routerProps =>
              <Donate {...routerProps}
                logIn={this.logIn}
                loggedIn={this.state.loggedIn}
                username={this.state.username}
              />} />
            <Route component={() => <h1>404 - Page Not Found</h1>} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
import React from 'react'
import './App.css'
import GetInvolved from './components/GetInvolved'
import { Route, Switch, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Donate from './components/Donate'
import API from './API'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Menu from './Menu'
import TopMenu from './components/TopMenu'
import FindMyReps from './components/FindMyReps'
import WomensHealth from './components/WomensHealth'

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

  HideLogIn = () => {
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
        <TopMenu
          loggedIn={this.state.loggedIn}
          logout={this.logout}
          showLogInState={this.state.showLogIn}
          username={this.state.username}
          logIn={this.logIn}
          HideLogIn={this.HideLogIn}
          userState={this.userState}
          showLogIn={this.showLogIn}
        />
        <Switch>
          <Route path='/elizabethwarren2020'
            component={routerProps =>
              <Home {...routerProps}
                username={this.state.username}
                closeGive={this.closeGive}
                loggedIn={this.state.loggedIn}
                logIn={this.logIn}
                resetDonationsBar={this.resetDonationsBar}
                showDonationsBar={this.state.donationsBar} />} />

          <Route path='/my-reps/elizabethwarren2020'
            component={routerProps =>
              <FindMyReps {...routerProps}
                username={this.state.username}
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
            />}
          />
          <Route path='/choice/elizabethwarren2020' component={routerProps =>
            <WomensHealth {...routerProps} />}
          />
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
        <Menu />
      </div>
    )
  }
}

export default App
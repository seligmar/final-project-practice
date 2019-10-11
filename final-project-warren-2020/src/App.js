import React from 'react'
import './App.css'
import GetInvolved from './components/GetInvolved'
import { Route, Switch, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Donate from './components/Donate'


class App extends React.Component {
  state = {
    donationsBar: true,
    username: ''
  }

  resetDonationsBar = () => {
    this.setState({ donationsBar: !this.state.donationsBar })
  }

  closeGive = () => {
    this.setState({ donationsBar: !this.state.donationsBar })
  }

  logout = () => { }

  render() {
    return (
      <div className='App'>
        {this.state.username !== '' ?
          <button onClick={() => this.logout()}>Log Out</button>
          : null}
        {this.state.username !== '' ?
          <p>Welcome back, {this.state.username}! Thank you for your support!</p>
          : null}
        {/* any way to call up user donation and event info? 
        if donations total 20 or more s
        short of limit, ask to give $20 */}
        <Switch>
          <Route path='/elizabethwarren2020' component={routerProps =>
            <Home {...routerProps} username={this.state.username}
              closeGive={this.closeGive}
              resetDonationsBar={this.resetDonationsBar}
              showDonationsBar={this.state.donationsBar} />} />
          <Route path='/getinvolved' component={routerProps =>
            <GetInvolved {...routerProps} username={this.state.username}
              closeGive={this.closeGive}
              resetDonationsBar={this.resetDonationsBar}
              showDonationsBar={this.state.donationsBar}
            />} />

          <Route path="/about/elizabethwarren2020" component={routerProps =>
            <About {...routerProps} />}
            closeGive={this.closeGive}
            resetDonationsBar={this.resetDonationsBar}
            showDonationsBar={this.state.donationsBar} />
          <Route path="/donate/elizabethwarren2020" component={routerProps =>
            <Donate {...routerProps} />} />
          <Route component={() => <h1>404 - Page Not Found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
import React from 'react'
import './App.css'
import GetInvolved from './components/GetInvolved'
import { Route, Switch, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Donate from './components/Donate'

// below is mockup
// "https://www.figma.com/file/KY3BKNojNY9CZgudaWBWw5/Warren2020?node-id=8%3A1"

// reminder to use sweet-alert
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { withRouter } from 'react-router-dom'

// const MySwal = withReactContent(Swal)

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

  render() {
    return (
      <div className='App'>
        {this.state.donationsBar ? (
          <div className='maybe-later' onClick={e => this.closeGive(e)}>Maybe Later</div>
        ) : null}
        {this.state.donationsBar ? (
          <Link to="/donate/elizabethwarren2020">
            <div className='donationsBar' onClick={e => this.resetDonationsBar(e)}>
              <h1 className="giving-text">Give Now</h1></div>
          </Link>
        ) : null}
        <Switch>
          <Route path='/elizabethwarren2020' component={routerProps =>
            <Home {...routerProps} username={this.state.username} />} />
          <Route path='/getinvolved' component={routerProps =>
            <GetInvolved {...routerProps} username={this.state.username} />} />

          <Route path="/about/elizabethwarren2020" component={routerProps =>
            <About {...routerProps} />} />
          <Route path="/donate/elizabethwarren2020" component={routerProps =>
            <Donate {...routerProps} />} />
          <Route component={() => <h1>404 - Page Not Found</h1>} />
        </Switch>
      </div >
    )
  }
}

export default App
import React from 'react'
import './App.css'
import GetInvolved from './components/GetInvolved'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

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

  linkTo = () => { }

  closeGive = () => {
    this.setState({ donationsBar: !this.state.donationsBar })
  }

  render() {
    return (
      <div className='App'>
        {this.state.donationsBar ? (
          <div className='donationsBar'>
            <button className='ui button donations-button' onClick={e => this.linkTo(e)}>Give Now</button>
            <button className='little-x-button' onClick={e => this.closeGive(e)}>X</button>
          </div>
        ) : null}

        <Switch>
          <Route path='/elizabethwarren2020' component={routerProps =>
            <Home {...routerProps} username={this.state.username} />} />
          <Route path='/getinvolved' component={routerProps =>
            <GetInvolved {...routerProps} username={this.state.username} />} />

          <Route path="/about" component={routerProps =>
            <About {...routerProps} />} />
        </Switch>
      </div>
    )
  }
}

export default App
import React from 'react'
import './App.css'
import UserIndex from './components/UserIndex'
import ReactPlayer from 'react-player'
import GetInvolved from './components/GetInvolved'

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

  linkTo = () => {}

  closeGive = () => {
    this.setState({ donationsBar: !this.state.donationsBar })
  }

  render () {
    return (
      <div className='App'>
        {this.state.donationsBar ? (
          <div className='donationsBar'>
            <button onClick={e => this.linkTo(e)}>Give Now</button>
            <button onClick={e => this.closeGive(e)}>X</button>
          </div>
        ) : null}
        <div className='video-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://media.giphy.com/media/lPjvLFOfrS3QUudX6S/source.mp4'
            playing='true'
            loop='true'
            width='100%'
            height='0%'
          />
        </div>
        <UserIndex />
        <GetInvolved username={this.state.username} />
      </div>
    )
  }
}
export default App

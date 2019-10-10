import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.showDonationsBar ? (
          <div className='maybe-later' onClick={e => this.props.closeGive(e)}>Maybe Later</div>
        ) : null
        }
        {
          this.props.showDonationsBar ? (
            <Link to="/donate/elizabethwarren2020">
              <div className='donationsBar' onClick={e => this.props.resetDonationsBar(e)}>
                <h1 className="giving-text">Give Now</h1></div>
            </Link>
          ) : null
        }
        <div className='video-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://media.giphy.com/media/lPjvLFOfrS3QUudX6S/source.mp4'
            playing='true'
            loop='true'
            width='100%'
            height='0%'
          /></div>
      </div>
    )
  }
}

export default Home
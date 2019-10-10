import React from 'react'
import ReactPlayer from 'react-player'

class Home extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Home
import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  render() {
    return (
      <div className='Menu'>
        <div className='menu-grid'>
          <Link to="/donate/elizabethwarren2020">
            <div className='donation-box'>
              <h1>Give Now</h1></div>
          </Link>
          <Link to="/getinvolved/elizabethwarren2020">
            <div className='get-involved-box'>
              <h1 className='involved-button'>Get Involved</h1></div>
          </Link>
          <Link to="/about/elizabethwarren2020">
            <div className='about-box'>
              <h1>About</h1></div>
          </Link>
        </div>
        <div>
          <div className='social-media-grid'>
            <a href="https://www.facebook.com/ElizabethWarren/" target="_blank">
              <button class="ui facebook button">
                <i class="facebook icon"></i>
                Facebook
            </button></a>
            <a href='https://twitter.com/ewarren' target="_blank">
              <button class="ui twitter button">
                <i class="twitter icon"></i>
                Twitter
</button></a>
            <a href='https://www.instagram.com/elizabethwarren/' target="_blank">
              <button class="ui instagram button">
                <i class="instagram icon"></i>
                Instagram
</button></a>
            <a href='https://www.youtube.com/channel/UCrj-0FxK19tgUR2EbHkBBGg' target="_blank">
              <button class="ui youtube button">
                <i class="youtube icon"></i>
                YouTube
</button></a>
          </div>
          <iframe src="https://giphy.com/embed/LqrDQpeG0ojjfEjKCb" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p>PAID FOR BY WARREN FOR PRESIDENT.</p>
          <p> © Copyright 2019. All rights reserved.</p></div>
        <p></p>
      </div>
    )
  }
}

export default Menu 
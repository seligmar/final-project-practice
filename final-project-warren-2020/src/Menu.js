import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  render() {
    return (
      <div className='Menu'>Menu Bar
          <Link to="/donate/elizabethwarren2020">
          <div className='donationsBar' onClick={e => this.props.resetDonationsBar(e)}>
            <h1 className="giving-text">Give Now</h1></div>
        </Link></div>
    )
  }
}

export default Menu 
import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {
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
              <div className='donationsBar-new' onClick={e => this.props.resetDonationsBar(e)}>
                <h1 className="giving-text">Give Now</h1></div>
            </Link>
          ) : null
        }
      </div>
    )
  }
}

export default About

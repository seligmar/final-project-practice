import React from 'react'
import { Link } from 'react-router-dom'

const IssuesBar = () => {

  const divStyle = {
    color: '#232444',
    'height': '25vh',


  }

  const imgDiv = {
    'height': '15wh'
  }

  const card = {
    'box-shadow': 'none',
   'background-size': 'contain'
  }

  return (
    <div className='issues'>
      <div class='ui three column grid'>
        <div class="column">
          <div className='event-div-style' style={{ 'margin-left': '5%' }}>
            <div style={card} className='ui card'>
              <div style={imgDiv} className='ui medium image'>
                <img
                  src='
                  https://media.graytvinc.com/images/810*455/STRIKE.png' />
              </div>
              <div style={divStyle} class="content">
                <p class="header">Union Jobs are American Jobs</p>
                <div class="description">
                It’s not a question of more government or less government. It’s about who government works for.
              </div>
              </div>
              <Link to="/labor/elizabethwarren2020" target="_top">
                <button className='button'>Labor</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="column">
          <div className='event-div-style' >
            <div style={card} className='ui card'>
              <div className='ui medium image'>
                <img style={imgDiv}
                  src='https://www.commondreams.org/sites/default/files/styles/cd_large/public/headlines/time_for_medicare_for_all1.jpg?itok=AtWHGu63' />
              </div>
              <div style={divStyle} class="content">
                <p class="header">HealthCare is a Basic Human Right</p>
                <div class="description">
                  Medicare for All is the best way to give every single person in this country a guarantee of high-quality health care.
              </div>
              </div>
              <Link to="/choice/elizabethwarren2020" target="_top">
                <button className='button'>HealthCare</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="column">
          <div className='event-div-style' style={{ 'margin-right': '5%' }}>
            <div style={card} className='ui card'>
              <div style={imgDiv} className='ui medium image'>
                <img
                  src='https://www.macleans.ca/wp-content/uploads/2018/07/abortion-rights-protest-1024x768-810x445.jpg' />
              </div>
              <div
                style={divStyle}
                class="content">
                <p class="header">Women's Rights are Human Rights</p>
                <div class="description" >
                  Congress should act to ensure that the will of the people- the right to choose- remains the law of the land.
                </div>
              </div>
              <Link to="/choice/elizabethwarren2020" target="_top">
                <button style={{ 'margin-bottom': '1%' }} className='button'>Choice</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default IssuesBar
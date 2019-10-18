import React from 'react'
import { Link } from 'react-router-dom'

const IssuesBar = () => {

  return (
    <div className='issues'>
      <div class='ui three column grid'>
        <div class="column">
          <div className='event-div-style' style={{ 'margin-left': '5%' }}>
            <div className='ui card'>
              <div className='ui medium image'>
                <img
                  src='https://www.gannett-cdn.com/presto/2019/09/22/PDTN/a0caad5b-1d5e-42c1-8ebb-3e75252b8fc9-082219_Warren_GM_UAW_News269.JPG?width=540&height=&fit=bounds&auto=webp' />
              </div>
              <div style={{ color: 'black' }} class="content">
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
            <div className='ui fluid card'>
              <div className='ui medium image'>
                <img
                  src='https://www.macleans.ca/wp-content/uploads/2018/07/abortion-rights-protest-1024x768-810x445.jpg' />
              </div>
              <div style={{ color: 'black' }} class="content">
                <p class="header">Daniel Louise</p>
                <div class="description">
                  Matthew is an interior designer living in New York. If I fill this
                  with content will this work to fit my div?
              </div>
              </div>
              <Link to="/choice/elizabethwarren2020" target="_top">
                <button className='button'>Choice</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="column">
          <div className='event-div-style' style={{ 'margin-right': '5%' }}>
            <div className='ui fluid card'>
              <div className='ui medium image'>
                <img
                  src='https://www.macleans.ca/wp-content/uploads/2018/07/abortion-rights-protest-1024x768-810x445.jpg' />
              </div>
              <div style={{ color: 'black' }} class="content">
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
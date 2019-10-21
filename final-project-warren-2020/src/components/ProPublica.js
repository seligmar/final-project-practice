import React from 'react'
import API from '../API'

const MY_PRO_PUBLICA_KEY = 'mGZ80fLhqn7WGi7KyArHqNLZTz0sCgehU4E9mIv7'
const PRO_PUBLICA_WARREN_ID = 'W000817'
const PRO_PUBLICA_BASE = 'https://api.propublica.org/congress/v1/116/senate'
const PRO_PUBLICA_MEMBERINFO = PRO_PUBLICA_BASE + '/members/' + PRO_PUBLICA_WARREN_ID + '.json'
const PRO_PUBLICA_STATEMENTS = 'https://api.propublica.org/congress/v1/members/W000817/statements/116.json'

class ProPublica extends React.Component {

  state = {
    news: [],
    showResults: false
  }

  getSpeach = () => {
    fetch("https://api.propublica.org/congress/v1/members/W000817/statements/116.json", {
      headers: {
        'X-API-Key': 'mGZ80fLhqn7WGi7KyArHqNLZTz0sCgehU4E9mIv7'
      }
    }).then(resp => resp.json()).then(news => this.getThree(news))
  }

  componentDidMount() {
    fetch("https://api.propublica.org/congress/v1/members/W000817/statements/116.json", {
      headers: {
        'X-API-Key': 'mGZ80fLhqn7WGi7KyArHqNLZTz0sCgehU4E9mIv7'
      }
    }).then(resp => resp.json()).then(news => this.getThree(news))
  }

  getThree = (news) => {
    this.setState({ news: news.results }, this.showResults)
  }

  showResults = () => this.setState({ showResults: true })

  render() {
    const divStyle = {
      color: '#232444',
      'height': '40vh',
    }

    return (
      <div className='issues'>
        <h1 style={{ 'color': '#232444' }}>News</h1>
        {this.state.showResults ? (
          <div class='ui three column grid'>
            <div class="column">
              <div className='event-div-style' style={{ 'margin-left': '5%' }}>
                <div className='ui card'>
                  <div style={divStyle} class="content">
                    <div class="description">
                      <h3>{this.state.news[0].date}</h3>
                      <p class="header">{this.state.news[0].title}</p>
                      <a href={this.state.news[0].url}>Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div >
            <div class="column">
              <div className='event-div-style' style={{ 'margin-left': '5%' }}>
                <div className='ui card'>
                  <div style={divStyle} class="content">
                    <div class="description">
                      <h3> {this.state.news[1].date} </h3>

                      <p class="header">{this.state.news[1].title}</p>
                      <a href={this.state.news[1].url}> Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div >
            <div class="column">
              <div className='event-div-style' style={{ 'margin-left': '5%' }}>
                <div className='ui card'>
                  <div style={divStyle} class="content">
                    <div class="description">
                      <h3>   {this.state.news[2].date} </h3>
                      <p class="header">{this.state.news[2].title}</p>
                      <a href={this.state.news[2].url}> Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div>
        ) : null
        }
      </div >

    )
  }
}

export default ProPublica
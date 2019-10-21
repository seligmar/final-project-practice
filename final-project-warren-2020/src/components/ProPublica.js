import React from 'react'

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
      'height': '40vh'
    }

    const card = {
      'box-shadow': 'none'
    }

    return (
      <div className='issues'>
        <h1 style={{ 'color': '#232444' }}>The Latest</h1>
        {this.state.showResults ? (
          <div class='ui three column grid'>
            <div class="column">
              <div className='event-div-style' style={{ 'margin-left': '5%' }}>
                <div style={card} className='ui card'>
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
                <div style={card} className='ui card'>
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
                <div style={card} className='ui card'>
                  <div style={divStyle} class="content">
                    <div class="description">
                      <h3>   {this.state.news[2].date} </h3>
                      <p class="header">{this.state.news[2].title}</p>
                      <a href={this.state.news[2].url}> Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
export default ProPublica
import React from 'react'
import API from '../API'

const MY_PRO_PUBLICA_KEY = 'mGZ80fLhqn7WGi7KyArHqNLZTz0sCgehU4E9mIv7'
const PRO_PUBLICA_WARREN_ID = 'W000817'
const PRO_PUBLICA_BASE = 'https://api.propublica.org/congress/v1/116/senate'
const PRO_PUBLICA_MEMBERINFO = PRO_PUBLICA_BASE + '/members/' + PRO_PUBLICA_WARREN_ID + '.json'
const PRO_PUBLICA_STATEMENTS = 'https://api.propublica.org/congress/v1/members/W000817/statements/116.json'

class ProPublica extends React.Component {

  state = {
    news: []
  }

  getSpeach = () => {
    fetch("https://api.propublica.org/congress/v1/members/W000817/statements/116.json", {
      headers: {
        'X-API-Key': 'mGZ80fLhqn7WGi7KyArHqNLZTz0sCgehU4E9mIv7'
      }
    }).then(resp => resp.json())
      .then(news => this.getThree(news))
  }

  componentDidMount() {
    this.getSpeach()
  }

  getThree = (news) => {
    this.setState({ news: news.results })
  }

  render() {
    return (
      <div>

      </div>

    )
  }
}

export default ProPublica
// import React from 'react'

// const baseURL = 'http://localhost:3001/'
// const newUserURL = baseURL + 'new-supporter'
// const logInURL = baseURL + 'signin'
// const events = baseURL + 'events'

// const MY_PRO_PUBLICA_KEY = 'mGZ80fLhqn7WGi7KyArHqNLZTz0sCgehU4E9mIv7'
// const PRO_PUBLICA_WARREN_ID = 'W000817'
// const PRO_PUBLICA_BASE = 'https://api.propublica.org/congress/v1/116/senate'
// const PRO_PUBLICA_MEMBERINFO =
//   PRO_PUBLICA_BASE + '/members/' + PRO_PUBLICA_WARREN_ID + '.json'

// const PRO_PUBLICA_STATEMENTS =
//   PRO_PUBLICA_BASE +
//   '/members/' +
//   PRO_PUBLICA_WARREN_ID +
//   '/statements/116.json'

// // "https://api.propublica.org/congress/v1/members/W000817.json"
// const GOOGLE_API_KEY = 'AIzaSyBuNd5baj7zHX5OmBtTYoBkhW_a4WN81S8'

// const GOOGLE_API_ROOT =
//   'https://www.googleapis.com/civicinfo/v2/representatives?address='

// class API extends React.Component {
//   // fetch(
//   //   `https://www.googleapis.com/civicinfo/v2/representatives?address=90+W+14th+St+Holland+MI+49423&includeOffices=true&key=${GOOGLE_API_KEY}`
//   // ).then(resp => resp.json())
//   // fetch(
//   //   `https://www.googleapis.com/civicinfo/v2/representatives?address=1701+N+Calvert+St+Baltimore+MD+21202&includeOffices=true&key=${GOOGLE_API_KEY}`
//   // ).then(resp => resp.json())

//   // getProPublicaStatements = () => {
//   //   return fetch(PRO_PUBLICA_STATEMENTS, {
//   //     method: 'GET',
//   //     headers: {
//   //       'X-API-Key': MY_PRO_PUBLICA_KEY
//   //     }
//   //   }).then(resp => resp.json())
//   // }

//   // getMemberInfo = () => {
//   //   return fetch(PRO_PUBLICA_MEMBERINFO, {
//   //     method: 'GET',
//   //     headers: {
//   //       'X-API-Key': MY_PRO_PUBLICA_KEY
//   //     }
//   //   }).then(resp => resp.json())
//   // }

//   // getGoogleAPI = () => {}

//   // // const googleCivics = 'https://developers.google.com/identity/protocols/OAuth2'

//   // state = {
//   //   events: []
//   // }

//   // getEvents = () => {
//   //   return fetch('http://localhost:3001/events') // events url
//   //     .then(resp => resp.json())
//   //     .then(events => this.setState({ events }))
//   // }

//   render () {
//     return <div />
//   }
// }

// export default API

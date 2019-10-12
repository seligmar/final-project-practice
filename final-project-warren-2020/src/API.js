const BASEURL = 'http://localhost:3001/'
const NEW_USER_URL = BASEURL + 'new-supporter'
const SIGNIN_URL = BASEURL + 'signin'
const EVENTS_URL = BASEURL + 'events'
const VALIDATE_URL = BASEURL + 'validate'
const DONATE_URL = BASEURL + 'donate'


const MY_PRO_PUBLICA_KEY = 'mGZ80fLhqn7WGi7KyArHqNLZTz0sCgehU4E9mIv7'
const PRO_PUBLICA_WARREN_ID = 'W000817'
const PRO_PUBLICA_BASE = 'https://api.propublica.org/congress/v1/116/senate'
const PRO_PUBLICA_MEMBERINFO =
  PRO_PUBLICA_BASE + '/members/' + PRO_PUBLICA_WARREN_ID + '.json'
const PRO_PUBLICA_STATEMENTS = PRO_PUBLICA_BASE + '/members/' + PRO_PUBLICA_WARREN_ID + '/statements/116.json'

const getValidation = VALIDATE_URL =>
  fetch(VALIDATE_URL, {
    headers: {
      Authorization: localStorage.getItem('token'),
      credentials: 'include'
    }
  }).then(resp => resp.json())

const get = url => fetch(url).then(resp => resp.json())

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
      credentials: 'include'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())


const signIn = user => post(SIGNIN_URL, user)

const newUser = user => post(NEW_USER_URL, user)

const donate = donation => post(DONATE_URL, donation)

const validate = () => getValidation(VALIDATE_URL)

const getEvents = () => get(EVENTS_URL)

export default { signIn, validate, newUser, donate, getEvents }

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

//   render () {
//     return <div />
//   }
// }


// export default API

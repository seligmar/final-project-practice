import React from 'react'

const baseURL = 'http://localhost:3001/'
const newUserURL = baseURL + 'new-supporter'
const logInURL = baseURL + 'signin'

const MY_PRO_PUBLICA_KEY = 'mGZ80fLhqn7WGi7KyArHqNLZTz0sCgehU4E9mIv7'
const PRO_PUBLICA_BASE = 'https://api.propublica.org/congress/v1/116/senate'
cosnt PRO_PUBLICA_MEMBERINFO = PRO_PUBLICA_BASE + '/members/' + PRO_PUBLICA_WARREN_ID + '.json' //will need to call 
//to find Warren
CONST PRO_PUBLICA_WARREN_ID = 'W000817' //still need to find that 
const PRO_PUBLICA_STATEMENTS = PRO_PUBLICA_BASE + '/members/' + PRO_PUBLICA_WARREN_ID + '/statements/116.json'

//"https://api.propublica.org/congress/v1/members/W000817.json" 


const GOOGLE_API_ROOT = 'https://www.googleapis.com/civicinfo/v2/representatives?address='
// Thank you for your request.
// The following key has been issued for Congress API
// KEY: mGZ80fLhqn7WGi7KyArHqNLZTz0sCgehU4E9mIv7

getProPublicaStatements = () => {
return fetch(PRO_PUBLICA_STATEMENTS, {
  method: 'GET', 
  headers: {
    "X-API-Key": MY_PRO_PUBLICA_KEY
  }}).then(resp => resp.json())
}

getMemberInfo = () => {
  return fetch(PRO_PUBLICA_MEMBERINFO, {
    method: 'GET', 
    headers: {
      "X-API-Key": MY_PRO_PUBLICA_KEY
    }}).then(resp => resp.json())
}

getGoogleAPI = () => {

}
const googleCivics = 'https://developers.google.com/identity/protocols/OAuth2'

const API = () => {
  return <div />
}

export default API

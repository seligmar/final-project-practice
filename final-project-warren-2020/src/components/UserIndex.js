import Login from './Login'
import NewSupport from './NewSupporter'
import API from './API'

class UserIndex extends React.Component {
  state = {
    user: ''
    // password: ''
  }

  logIn = e => {
    e.preventDefault()
    this.setState(
      {
        user: e.target.username.value
        //  password: e.target.password.value
      },
      this.postNewUser(e)
    )
  }

  logInNewUser = e => {
    e.preventDefault()
    this.setState(
      {
        user: e.target.username.value
        //  password: e.target.password.value
      },
      this.createNewUser(e)
    )
  }

  postNewUser = e => {
    return fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      })
    }).then(resp => resp.json())
  }

  createNewUser = e => {
    return fetch('http://localhost:3001/new-supporter', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      })
    }).then(resp => resp.json())
  }

  render () {
    return (
      <div>
        <Login logIn={this.logIn} />
        <NewSupport LogInNewUser={this.logInNewUser} />
      </div>
    )
  }
}
export default UserIndex


import React from 'react'
import { Link } from 'react-router-dom'
import UserIndex from './UserIndex'

const TopMenu = props => {
  const styles = {
    position: 'absolute',
    left: '2%',
    top: '2%'
  }
  return (
    <div className='top-menu'>

      {/* </div> */}
      {/* any way to call up user donation and event info? 
if donations total 20 or more s
short of limit, ask to give $20 */}
      <i class="align justify icon" style={styles}></i>
      {props.loggedIn ?
        <button className="button-login" onClick={() => props.logout()}>Log Out</button>
        : <button className="button-login" onClick={() => props.showLogIn()}>Log In</button>
      }

      <Link to="/elizabethwarren2020">
        <button className="button-login" >Home</button>
      </Link>
      <Link to="/donate/elizabethwarren2020">
        <button className="button-login" >Give Now</button>
      </Link>
      <Link to="/getinvolved/elizabethwarren2020">
        <button className="button-login" >Get Involved</button>
      </Link>
      <Link to="/about/elizabethwarren2020">
        <button className="button-login" >About</button>
      </Link>
      <Link to="/my-reps/elizabethwarren2020">
        <button className="button-login" >Find My Reps</button>
      </Link>
      {
        props.showLogInState ?
          <UserIndex
            showLogIn={props.showLogIn}
            userState={props.userState}
            logIn={props.logIn}
            loggedIn={props.loggedIn}
            HideLogIn={props.HideLogIn}
          /> : null
      }
      {
        props.loggedIn ?
          <p>Welcome back, {props.username}! Thank you for your support!</p>
          : null
      }
    </div >
  )
}
export default TopMenu 
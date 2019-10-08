import React from 'react'
import './App.css'
import UserIndex from './components/UserIndex'
import MapFragment from './components/Map'

// below is mockup
// "https://www.figma.com/file/KY3BKNojNY9CZgudaWBWw5/Warren2020?node-id=8%3A1"

// reminder to use sweet-alert
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { withRouter } from 'react-router-dom'

// const MySwal = withReactContent(Swal)

const App = () => {
  return (
    <div className='App'>
      {/* <header className='App-header'> */}
      <MapFragment />
      <UserIndex />

      {/* MySwal.fire({
      imageUrl: 'https://media.giphy.com/media/h5AHEcNMhn7u8/giphy.gif',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Bob Ross',
      animation: false,
      confirmButtonText: 'Im done',
      background: '#090526',
      padding: '.25em',
      confirmButtonColor: 'cornflowerblue',
      width: 300
    }) */}
      {/* </header> */}
    </div>
  )
}

export default App

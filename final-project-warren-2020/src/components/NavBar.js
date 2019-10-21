import React from 'react'

const NavBar = props => {

  const buttons = {
    'background-color': '#b61b28',
    color: '#fff',
    'border-color': '#232444'
  }

  const margins = {
    'padding-top': '2%',
    'padding-bottom': '2%',
  }

  const border = {
    'border-color': '#b7e4cf',
    'border-style': 'solid',
    'border-width': '10px'
  }
  const formHeader = {
    'margin-bottom': '2%',
    'text-decoration': 'underline'
  }

  return <div>
    <div style={margins} className='login'>
      <div style={border} class='field'>
        <form onSubmit={(e) => props.getZip(e)}>
          <div style={formHeader}>Find Events Near Me!</div>
          <label>Zip </label>
          <input
            type='text'
            name='zip'
            placeholder='Zip'
          />
          <button style={buttons}>  Find Events Near Me</button>
          <button style={buttons} onClick={() => props.showAll}>  Show All Events</button>
        </form>
        <div style={{ 'padding-bottom': '2%' }}></div>
      </div>
    </div >
  </div >
}

export default NavBar
import React from 'react'

const NewEventButton = props => {
  const newCSS = {
    'margin-right': '10%',
    'margin-left': '10%',
    'margin-top': '2%',
    'border-color': '#b7e4cf',
    'background-color': '#fff',
    'border-width': '10px',
    'border-style': 'solid',
  }
  return (
    <div style={newCSS}>
      <div style={{ 'background-color': '#fff', }}> </div>
      <img src='https://media.giphy.com/media/UUtWxpMhy3ZvHojSdI/200w_d.gif' />
      <div>
        <button style={{ 'margin-bottom': '2%', 'margin-top': '2%', }} className='button' onClick={() => props.createEventState()}>
          Create Event</button>
      </div>
    </div>
  )
}

export default NewEventButton
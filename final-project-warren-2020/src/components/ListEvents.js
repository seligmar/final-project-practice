import React from 'react'

const ListEvents = props => {
  return (
    <div>
      <div>Events</div>
      <div className='grid'>
        {props.events.map(event => (
          <div className='event-div' key={event.id}>
            <p>{event.name}</p>
            <p>{event.street_address_1}</p>
            <p>
              {event.city},{event.state}, {event.zip}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListEvents

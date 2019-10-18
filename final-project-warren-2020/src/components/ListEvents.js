import React from 'react'

const ListEvents = props => {

  return (
    <div>
      {props.events.map(event => (
        <div className='event-div-style' key={event.id}>
          <div className='event-div'>
            <div className='ui fluid card'>
              <div className='class-content'>
                <img className='ui small right floated image'
                  alt="Warren Yard Sign"
                  src='https://cdn.shopify.com/s/files/1/1908/6551/products/YardSign-Comp_LG_1_530x@2x.jpg?v=1561750606' />
                <p className='header'>{event.title}</p>
                <p>{event.start_time} - {event.start_time} on {event.day}/{event.month}/{event.year}</p>
                <p className='description'>{event.street_address_1}</p>
                <p className='description'>
                  {event.city}, {event.state} {event.zip}
                </p>
                <button className='event-button' onClick={(e) => props.rsvp(e, event.id)}>RSVP!</button>
              </div>
            </div>
          </div>
        </div>
      )
      )
      }
    </div >
  )
}

export default ListEvents

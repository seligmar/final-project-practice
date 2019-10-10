import React from 'react'

const ListEvents = props => {
  return (
    <div>
      {props.events.map(event => (
        <div style={{ padding: '1%' }}>
          <div className='event-div'>
            <div className='ui fluid card' key={event.id}>
              <div className='class-content'>
                <img className='ui small right floated image'
                  src='https://cdn.shopify.com/s/files/1/1908/6551/products/YardSign-Comp_LG_1_530x@2x.jpg?v=1561750606' />
                <p className='header'>{event.title}</p>
                <p className='description'>{event.street_address_1}</p>
                <p className='description'>
                  {event.city}, {event.state} {event.zip}
                </p>
                <button className='event-button'>RSVP!</button>
              </div>
            </div>
          </div>
        </div>
      )
      )
      }
    </div>
  )
}

export default ListEvents

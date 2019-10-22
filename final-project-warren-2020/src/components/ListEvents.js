import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const ListEvents = props => {
  const events =
    props.filteredEvents ? props.events.filter(event => event.zip === props.zip) : props.events
  if (events.length === 0 && props.filteredEvents === true) {
    MySwal.fire({
      text: 'No events area scheduled in your area. Log in or create an account to schedule an event in your neighborhood!',
      // type: 'error',
      imageUrl: 'https://media.giphy.com/media/UUtWxpMhy3ZvHojSdI/200w_d.gif',
      confirmButtonColor: '#b61b28'
    })
  }
  return (
    <div>
      {events.map(event => (
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

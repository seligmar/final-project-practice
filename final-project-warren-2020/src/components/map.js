import React, { useState } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'

// Iowa per https://www.latlong.net/
// lat: 41.878002
// lng: -93.097702

const GOOGLE_API_KEY = 'AIzaSyBuNd5baj7zHX5OmBtTYoBkhW_a4WN81S8'

const MapFragment = props => {
  const xButton = {
    position: 'relative',
    left: '48.0%',
    top: '0%',
    'margin-top': '1.5%',
    'background-color': '#b61b28',
    color: '#fff',
    'border-color': '#b61b28',
    'border-radius': '5px',
  }
  const Map = () => {
    const [selectedEvent, setSelectedEvent] = useState(null)
    const events =
      props.filteredEvents ? props.events.filter(event => event.zip === props.zip) : props.events
    return (
      <div>
        < button style={xButton} onClick={() => props.showMapFunction()}>Hide Map</button>
        <GoogleMap defaultZoom={3} defaultCenter={{ lat: 41, lng: -93 }}>
          {events.map(event => (
            <Marker
              key={event.id}
              position={{ lat: event.lat, lng: event.lng }}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
          {selectedEvent ? (
            <InfoWindow
              position={{ lat: selectedEvent.lat, lng: selectedEvent.lng }}
              onCloseClick={() => setSelectedEvent(null)}
            >
              <div style={{ color: '#232444' }}>
                <p>{selectedEvent.title}</p>
                <p>{selectedEvent.start_time} - {selectedEvent.start_time} on {selectedEvent.day}/{selectedEvent.month}/{selectedEvent.year}</p>
                <p>{selectedEvent.street_address_1}</p>
                {selectedEvent.city}, {selectedEvent.state}, {selectedEvent.zip}
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    )
  }

  // default zoom sets how large or small an area is shown. want entire US

  const WrappedMap = withScriptjs(withGoogleMap(Map))

  return (
    <div>
      {props.showMap ? (
        <div className='googleMap'>
          <div style={{ width: '100%', height: '50vh' }}>
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_API_KEY}`}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '100%' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>{' '}
        </div>
      ) : null}
    </div>
  )
}

export default MapFragment

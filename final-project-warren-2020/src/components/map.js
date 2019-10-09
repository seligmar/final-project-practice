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
  const Map = () => {
    const [selectedEvent, setSelectedEvent] = useState(null)
    return (
      <GoogleMap defaultZoom={3} defaultCenter={{ lat: 41, lng: -93 }}>
        {props.events.map(event => (
          <Marker
            key={event.id}
            position={{ lat: event.lat, lng: event.lng }}
            onClick={() => setSelectedEvent(event)}
          />
        ))}
        {selectedEvent ? (
          <InfoWindow
            position={{ lat: selectedEvent.lat, lng: selectedEvent.lng }}
          >
            <div>event</div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    )
  }

  // default zoom sets how large or small an area is shown. want entire US

  const WrappedMap = withScriptjs(withGoogleMap(Map))

  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_API_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}

export default MapFragment

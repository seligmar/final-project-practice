import React from 'react'
import { GoogleMap } from 'react-google-maps'

// Iowa per https://www.latlong.net/ 
// lat: 41.878002
// lng: -93.097702

function Map () {
  return <GoogleMap defaultZoom={10} defaultCenter={lat:41.878002 lng:-93.097702}/>
}

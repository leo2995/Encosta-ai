import React,{Component} from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -8.0630045, lng: -34.87142326 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -8.0630045, lng:  -34.87142326}} />}
    </GoogleMap>
))

const Maps = props => {
    return (
       
        <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
        
    )

}

export default Maps;
import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import config from './../firebase-Config'

const MyMapComponent = withScriptjs(withGoogleMap(({ privateParking, isMarkerShown }) => {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -8.0630045, lng: -34.87142326 }}
        >
            {isMarkerShown
                ? Object.keys(privateParking).map(key => {
                    const { latitude: lat, longitude: lng } = privateParking[key];
                    return <Marker position={{ lat: parseInt(lat), lng: parseInt(lng) }} key={key} />
                })
                : null
            }
        </GoogleMap>
    );
}));

class Maps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            privateParking: {},
        }

        config.syncState('privateParking', {
            context: this,
            state: 'privateParking',
            asArray: false
        });
    }

    render() {
        const { privateParking } = this.state;

        return (
            <MyMapComponent
                privateParking={privateParking}
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}

export default Maps;
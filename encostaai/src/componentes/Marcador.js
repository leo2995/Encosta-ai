import React from 'react'

import Maps from './Maps'


import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -8.0630045, lng: -34.87142326 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -8.0630045, lng: -34.87142326 }} />}

    </GoogleMap>
))



const Marcador = props => {

    return (
        <div className='jumbotron text-center'>
            <h1>EncostaAí</h1>
            <p>Seu Carro Bem Estacionado</p>

        </div>


    )
}

export default Marcador

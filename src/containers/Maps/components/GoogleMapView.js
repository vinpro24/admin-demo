import React from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"

const GoogleMapView = withScriptjs(withGoogleMap(props => {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
        </GoogleMap>
    );
}));

export default GoogleMapView;

import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const key = 'AIzaSyCJ_3kwKCY8B9XHk3qVDb7dpg0Tz7KY8Gw';

const mapStyles = {
    width: '50%',
    height: '50%'
};

const chsGunsLocation = { lat: -34.08005266186184, lng: 18.84779758432049 };

export const MapsContainer = (props) => {
    return (
        <div>
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                center={chsGunsLocation}
            />
            <Marker 
                title={"CHS Guns location"}
                position={chsGunsLocation}
            />
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: key
})(MapsContainer);
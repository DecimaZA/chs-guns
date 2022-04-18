import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Box, Grid } from "@mui/material";

const key = 'AIzaSyBklRqMIpBkXrrfB86CBtVEUOupGtPK_vQ';

const mapStyles = {
    width: '100%',
    // height: '50%'
    // width: '100%',
    // height: '100px',
    // position: 'relative'
};

const chsGunsLocation = { lat: -34.08005266186184, lng: 18.84779758432049 };

export const MapsContainer = (props) => {
    return (
        <div style={{width: 900, height: 500, position: "relative", marginTop: 40}}>
            <Map
                        
                        google={props.google}
                        zoom={20}
                        style={mapStyles}
                        initialCenter={
                            {
                                lat: -34.08005266186184, 
                                lng: 18.84779758432049
                            }
                        }
                    >
                    <Marker 
                        title={"CHS Guns location"}
                        position={chsGunsLocation}
                    />
                    </Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: key
})(MapsContainer);
import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Box, Grid } from "@mui/material";

const key = 'AIzaSyBklRqMIpBkXrrfB86CBtVEUOupGtPK_vQ';

const mapStyles = {
    width: '50%',
    height: '50%'
};

const chsGunsLocation = { lat: -34.08005266186184, lng: 18.84779758432049 };

export const MapsContainer = (props) => {
    return (
        // <Box sx={{width: "400px"}}>
        //     <Grid container direction='columns'>
        //         <Grid item xs={12}>
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
        //         </Grid>
        //     </Grid>
        // </Box>
    );
};

export default GoogleApiWrapper({
    apiKey: key
})(MapsContainer);
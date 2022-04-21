import React from "react";
import Logos from '../images/Logos';
//MUI imports
import { Typography } from "@mui/material";
import { Box, Grid } from "@mui/material/";

const Home = () => {
    return (
        <Box>
            <Grid container direction="column" justifyContent="center">
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h1">
                        Welcome to CHS Guns!
                    </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                        <Typography variant="h5" align="center" margin="25rem">
                            Welcome to CHS Guns, established in 1974 by the late Chris H. Scheidereiter, and delivering great services 
                            and experiences to our clients since! We are not limited in scope of what we offer, going beyond firearms, 
                            we service survivalists, less-than-lethal self-defence tools, firearm and non-firearm related accessories, 
                            and much more! 
                            We also specialise in making firearm ownership and carry accessible and convenient for women, no doubt made 
                            easier by the current owner and operator of CHS Guns being a woman herself, and having experienced all the 
                            challenges that women continue to encounter.
                        </Typography>                   
                </Grid>
            </Grid>
            <Grid container direction="column" margin="1rem">
                <Grid container direction="row">
                    <Grid item xs={6} textAlign="center">
                        <Typography variant='h4'>
                            Products and brands we cover
                        </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="center">
                        <Logos />
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={6} textAlign="center">
                        <Logos />
                    </Grid>
                    <Grid item xs={6} textAlign="center">
                        <Typography variant='h4'>
                            Accessories for your goodies
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={6} textAlign="center">
                        <Typography variant='h4'>
                            Services we offer to keep you and your toys functioning on the range
                        </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="center">
                        <Logos />
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={6} textAlign="center">
                        <Logos />
                    </Grid>
                    <Grid item xs={6} textAlign="center">
                        <Typography variant='h4'>
                            Got Questions? We have answers!
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={6} textAlign="center">
                        <Typography variant='h4'>
                            Want to find us?
                        </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="center">
                        <Logos />
                    </Grid>
                </Grid>
            </Grid>                                             
        </Box>
    );
};

export default Home;
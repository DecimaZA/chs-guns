import React from "react";
import { NavLink } from "react-router-dom";
//MUI imports
import { Box, Grid, Typography } from "@mui/material";

const today = new Date();

const Footer = () => {
    return(
        <Box sx={{ backgroundColor: "black", width: '100%' }} padding="1rem">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={1} md={3} />
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/home'}>                           
                        HOME                           
                    </NavLink>
                </Grid>
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/products'}>                           
                        PRODUCTS                           
                    </NavLink>
                </Grid>
                <Grid item xs={1} md={3} />
                <Grid item xs={1} md={3} />
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/accessories'}>                           
                        ACCESSORIES                           
                    </NavLink>
                </Grid>
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/services'}>                           
                        SERVICES                           
                    </NavLink>
                </Grid>
                <Grid item xs={1} md={3} />
                <Grid item xs={1} md={3} />
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/faq'}>                           
                        FAQ                           
                    </NavLink>
                </Grid>
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/contact'}>                           
                        CONTACT US                           
                    </NavLink>
                </Grid>
                <Grid item xs={1} md={3} />  
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6} />
                <Grid item xs={12} textAlign='center' padding="0.5rem">
                    <Typography color="white">
                        COPYRIGHT CHS GUNS {today.getFullYear()}
                    </Typography>
                </Grid>
                <Grid item xs={4} />
            </Grid>
        </Box>
    );
};

export default Footer;
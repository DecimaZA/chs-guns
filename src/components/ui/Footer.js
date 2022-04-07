import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "./Themes";
import Link from "../Link";
import chsLogo from './chsLogo.png';
//MUI imports
import { Paper } from "@mui/material";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material";

const today = new Date();

const Footer = () => {
    return(
        <ThemeProvider theme={theme}>
            <Box position="absolute" sx={{ flexGrow: 1, width: "100%", height: "200px", backgroundColor: "#000000" }}>
                <Typography component="span" theme={theme} variant="primary">
                    <Grid container justify="center" spacing={10} marginBottom="1rem" marginTop="0.1rem" >
                        <Grid item>
                            <Grid container direction="column">
                                <Grid item>
                                    <Link href='/'>
                                        <img src={chsLogo} alt="logo" flex="1" width="100" />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" spacing={2}>
                                <Grid item >
                                    <Link href="/products">
                                        Products
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/accessories">
                                        Accessories
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Link href="/services">
                                        Services
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/faq">
                                        FAQ
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                <Link href="/contact">
                                        Contact
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography justify="center" fontSize={12}>
                        <span fontSize="1px">COPYRIGHT CHS GUNS {today.getFullYear()}</span>
                    </Typography>
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default Footer;
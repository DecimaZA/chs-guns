import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "./Themes";
//MUI imports
import { Paper } from "@mui/material";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material";

const item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'red'
}));

const Footer = () => {
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, width: "100%", height: "200px", backgroundColor: "#000000" }}>
                <Typography component="span" theme={theme} variant="primary">
                    <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 5, md: 50}} textAlign="center">
                        <Grid item xs={6}>
                            Concept Text 1
                        </Grid>
                        <Grid item xs={6}>
                        Concept Text 2
                        </Grid>
                        <Grid item xs={6}>
                        Concept Text 3
                        </Grid>
                        <Grid item xs={6}>
                        Concept Text 4
                        </Grid>
                    </Grid>
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default Footer;
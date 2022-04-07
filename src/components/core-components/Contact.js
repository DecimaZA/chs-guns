import React from "react";
import MapsContainer from '../../apis/GoogleMaps';
import theme from "../ui/Themes";
//MUI imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, Typography } from "@mui/material";
import { Grid } from "@mui/material";

const Contact = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography component={'span'}>
                <Grid container justify="center" spacing={10} marginTop="1px" >   
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item  >
                                <Typography variant="h1" marginLeft={4}>
                                    About our exact location...
                                </Typography>
                                    <Typography variant="h2" marginLeft={10}>
                                        Street access and parking
                                    </Typography>
                                        <Typography align="left" variant="body1" marginLeft={4} marginTop={1} marginRight={130}>
                                            Basement Level, The Beehive, 159 Main Road, Somerset West, 7130, Western Cape, South Africa, Earth, Milky Way Galaxy, the Universe
                                            Our store location is tucked away behind The Beehive building, with vehicle access from both Main Road and St James Street (even
                                            though Google Maps makes it appear there is a building in the way).
                                        </Typography >
                                        <Typography align="left" variant="body1" marginLeft={4} marginTop={1} marginRight={130}>    
                                            If you are visiting us for the first time, the easiest access is from Main Road, through the narrow road/alley directly next 
                                            to Ye Olde Bell. Keep left when you enter that way, and you will find yourself in a small parking area at the end, with another 
                                            small road/alley at the end and on the left. You can use this road to exit on St James Street when you leave, and even use it to 
                                            come see us the next time you visit! If you enter from St James Street, you will then of course be able to exit onto Main Road, 
                                            or even back onto St James Street if you are brave enough or otherwise able to turn around in the narrow parking area. 
                                        </Typography>
                                        <Typography variant="h2" marginLeft={10}>
                                            The store entrance...
                                        </Typography>
                                        <Typography align="left" variant="body1" marginLeft={4} marginTop={1} marginRight={130}>
                                            Our store entrance is to the right of the steel fire escape, down some steps. You will see the thick steel barred gate that
                                            gun shop customers are all to familiar with. Beyond that gate and immediately to the left is another smaller gate that directly
                                            enters the store. If you walk past it, you will find yourself in the section of the CHS Bunker occupied by WildMedix, and maybe 
                                            encounter a wild Gideon lurking and waiting to help you like the good CHS elf he is.
                                        </Typography>
                                        <Typography variant="h2" marginLeft={10}>
                                            Our operating hours:
                                        </Typography>
                                        <Typography align="left" variant="body1" marginLeft={4} marginTop={1} marginRight={130}>
                                            We all have to sleep and do admin sometime! Please note out operating hours:
                                            Monday: Closed
                                            Tuesday: 09:00 - 17:00
                                            Wednesday: 09:00 - 17:00
                                            Thuesday: 09:00 - 17:00
                                            Friday: 09:00 - 17:00
                                            Saturday: Closed
                                            Sunday: Closed
                                        </Typography>
                                        <Typography variant="h2" marginLeft={10}>
                                            Call or drop us an email for any questions or comments you may have!
                                        </Typography>
                                        <Typography align="left" variant="body1" marginLeft={4} marginTop={1} marginRight={130}>
                                            Store contact number: 083 252 5097
                                            Store email: aziza@chsguns.co.za
                                        </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" justify="center">
                            <Grid item>
                                <Container>
                                    <MapsContainer />
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Typography>
        </ThemeProvider>
    );
};

export default Contact;
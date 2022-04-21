import React from "react";
import MapsContainer from '../../apis/GoogleMaps';
import theme from "../ui/Themes";
//MUI imports
import { ThemeProvider, Typography } from "@mui/material";
import { Grid } from "@mui/material";

// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const Contact = () => {
    return (
        <ThemeProvider theme={theme} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 4 }} columns={{ xs: 6, md: 12 }} padding="20px">
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h1" align="center">
                        About our exact location...
                    </Typography>
                    <Typography variant="h6" align="center">
                        Basement Level, The Beehive, 159 Main Road, Somerset West, 7130, Western Cape, South Africa, Earth, Milky Way Galaxy, the Universe
                    </Typography>
                </Grid>
                <Grid item xs={6} textAlign="center">
                    <Typography variant="h2" align="center">
                        Street access and parking
                    </Typography>
                    <Typography align="center" variant="body1">
                        Our store location is tucked away behind The Beehive building, with vehicle access from both Main Road and St James Street (even
                        though Google Maps makes it appear there is a building in the way).
                    </Typography >
                    <Typography align="center" variant="body1">    
                        If you are visiting us for the first time, the easiest access is from Main Road, through the narrow road/alley directly next 
                        to Ye Olde Bell. Keep left when you enter that way, and you will find yourself in a small parking area at the end, with another 
                        small road/alley at the end and on the left. You can use this road to exit on St James Street when you leave, and even use it to 
                        come see us the next time you visit! If you enter from St James Street, you will then of course be able to exit onto Main Road, 
                        or even back onto St James Street if you are brave enough or otherwise able to turn around in the narrow parking area. 
                    </Typography>
                </Grid>
                <Grid item xs={6} textAlign="center">
                    <Typography variant="h2" align="center">
                        The store entrance...
                    </Typography>
                    <Typography align="center" variant="body1">
                        Our store entrance is to the right of the steel fire escape, down some steps. You will see the thick steel barred gate that
                        gun shop customers are all to familiar with. Beyond that gate and immediately to the left is another smaller gate that directly
                        enters the store. If you walk past it, you will find yourself in the section of the CHS Bunker occupied by WildMedix, and maybe 
                        encounter a wild Gideon lurking and waiting to help you like the good CHS elf he is.
                    </Typography>
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={6} />
                <Grid item xs={6} textAlign="center">
                    <Grid container direction="column">
                        <Grid item textAlign="center">
                            <Typography variant="h2">
                                Our operating hours:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align="center" variant="body1">
                                We all have to sleep and do admin sometime! Please note our operating hours:
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography align="center" variant="body1">
                                Monday: Closed
                            </Typography>                                             
                            <Typography align="center" variant="body1">
                                Tuesday: 09:00 - 17:00
                            </Typography>
                            <Typography align="center" variant="body1">
                                Wednesday: 09:00 - 17:00
                            </Typography>
                            <Typography align="center" variant="body1">
                                Thuesday: 09:00 - 17:00
                            </Typography>
                            <Typography align="center" variant="body1">
                                Friday: 09:00 - 17:00
                            </Typography>
                            <Typography align="center" variant="body1">
                                Saturday: Closed
                            </Typography>  
                            <Typography align="center" variant="body1">
                                Sunday: Closed
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                <Grid item xs={6} textAlign="center">
                    <Typography align="center" variant="h2">
                        Get in touch!
                    </Typography>
                    <Typography align="center" variant="body1">
                        Call or drop us an email for any questions or comments you may have!
                    </Typography>
                    <Typography align="center" variant="body1">
                        Store contact number: 083 252 5097
                    </Typography>
                    <Typography align="center" variant="body1">
                        Store email: aziza@chsguns.co.za
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction="column" columns={{ xs: 6, md: 12 }}>
                <Grid item xs={6} md={12}>
                    <div style={{
                        height: "600px",
                        width: "100%",
                        display: "flex",
                        flexFlow: "row nowrap",
                        justifyContent: 'center',
                        }}
                    >
                        <MapsContainer />    
                    </div>
                </Grid>
            </Grid>    
        </ThemeProvider>
    );
};

export default Contact;
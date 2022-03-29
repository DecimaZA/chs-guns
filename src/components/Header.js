import React from "react";
import Link from "./Link";
//Material-UI imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "material-ui/Toolbar";
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Box } from "@material-ui/core";
import { ButtonGroup } from "@mui/material";

const Header = () => {
    return (
        <MuiThemeProvider>
            <Box 
                sx={{
                    width: 1920,
                    height: 50,

                }}
            >
                <AppBar position="static" color="primary" >
                        <Toolbar style={{backgroundColor: "black"}}>
                            <ButtonGroup>
                                <Link href='/'>
                                    <VerifiedUserRoundedIcon edge="start" style={{ fontSize: 50, margin: 3 }} />
                                </Link>
                                    <Link href='/'>
                                        Home
                                    </Link>
                                    <Link href='/products'>
                                        Products
                                    </Link>
                                    <Link href='/services'>
                                        Services
                                    </Link>
                                    <Link href='/faq'>
                                        FAQ
                                    </Link>
                                    <Link href='/contact'>
                                        Contact Us
                                    </Link>
                            </ButtonGroup>
                        </Toolbar>
                </AppBar>
            </Box>
        </MuiThemeProvider>        
    );
};

export default Header;
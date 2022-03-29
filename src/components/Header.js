import React from "react";
import Link from "./Link";
//Material-UI imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "material-ui/Toolbar";
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Typography, Button } from "@material-ui/core";

const Header = () => {
    return (
        <MuiThemeProvider>
            <AppBar position="static" color="primary" >
                <Toolbar style={{backgroundColor: "black"}}>
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
                </Toolbar> 
            </AppBar>
        </MuiThemeProvider>        
    );
};

export default Header;
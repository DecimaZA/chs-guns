import React from "react";
import Link from "../Link";
import theme from './Themes';
//MUI imports
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import { ButtonGroup, Typography } from "@mui/material";

const Header = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">
                    <Toolbar theme={theme}>
                        <ButtonGroup>
                            {/* <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} 
                            > */}
                                <Link href='/'>
                                    <VerifiedUserIcon edge="start" style={{ fontSize: 50, margin: 3 }} />
                                </Link>
                            {/* </Typography> */}
                            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
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
                            {/* </Box> */}
                        </ButtonGroup>                    
                    </Toolbar>
            </AppBar>
        </ThemeProvider>    
    );
};

export default Header;
import React, { useState } from "react";
import Link from "../Link";
import theme from './Themes';
import SearchBar from "./SearchBar";
//MUI imports
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {   
    const pages = ["Products", "Accessories", "Services", "FAQ", "Contact"];
    const [anchorElNav, setAnchorElNav] = useState(null);

    // const history = useNavigate();
    
    const handleOpenNavMenu = (event) => {
        return setAnchorElNav(event.currentTarget);
      };
    const handleCloseNavMenu = () => {
        return setAnchorElNav(null);
    };
    
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="x1">
                        <Toolbar theme={theme} disableGutters>
                            <Typography 
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                            >
                                <Link href='/'>
                                    <VerifiedUserIcon edge="start" style={{ fontSize: 50, margin: 3 }} />
                                </Link>
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                                                <Typography textAlign="center" fontSize="1rem" color="primary">                                           
                                                   <Link href={`/${page}`}>{page}</Link>                                    
                                                </Typography>
                                            </Button>
                                        </MenuItem>
                                    ))}
                                    <SearchBar />
                                </Menu>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            >
                                <Link href='/'>
                                    <VerifiedUserIcon edge="start" style={{ fontSize: 50, margin: 3 }} />
                                </Link>
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link href={`/${page}`}>
                                        {page}
                                    </Link>
                                </Button>
                                ))}
                            <SearchBar />
                            </Box>
                        </Toolbar>
                    </Container>
            </AppBar>
        </ThemeProvider>    
    );
};

export default Header;
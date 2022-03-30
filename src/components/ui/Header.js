import React from "react";
import Link from "../Link";
import theme from './Themes';
import SearchBar from "./SearchBar";
import { useState } from "react";
import GroupedHeaderButtons from "../core-components/GroupedHeaderButtons";
//MUI imports
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography, Button, ButtonGroup, IconButton, Menu, MenuItem, Box, Container } from "@mui/material";

const Header = () => {   
    const pages = ["Home", "Producs", "Accessories", "Services", "FAQ", "Contact us"];
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        return setAnchorElNav(event.currentTarget);
      };
    const handleCloseNavMenu = () => {
        return setAnchorElNav(null);
    };
    
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">
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
                                    aria-label="account of current user"
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
                                            <Typography textAlign="center" fontSize="1rem" color="secondary" >{page}</Typography>
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
                                    {page}
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
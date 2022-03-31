import React from "react";
import Header from "./ui/Header";
import Route from "./Route";
import Accessories from "./core-components/Accessories";
import Contact from "./core-components/Contact";
import Home from "./core-components/Home";
import Products from "./core-components/Products";
import Services from "./core-components/Services";
import FaQ from "./core-components/FaQ";
import theme from './ui/Themes';
//MUI imports
import Box from "@mui/material/Box";
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
    return ( 
        <ThemeProvider theme={theme}>    
            <Box 
                sx={{width: 1920,
                    height: 1080,
                    border: "10px",
                    backgroundColor: "gray",
                }}
            >
                <div>
                    <Header />
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/accessories">
                        <Accessories />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/faq">
                        <FaQ />
                    </Route>
                </div>
            </Box>
        </ThemeProvider>  
    );
}

export default App;
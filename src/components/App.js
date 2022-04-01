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

//import Route from "./Link";
import { BrowserRouter, Routes, Route, Switch, Link, Outlet } from "react-router-dom";
// import Accessories from "./core-components/Accessories";
// import Contact from "./core-components/Contact";
// import Home from "./core-components/Home";
// import Products from "./core-components/Products";
// import Services from "./core-components/Services";
// import FaQ from "./core-components/FAQ";

//MUI imports
import Box from "@mui/material/Box";
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
    return (       
        <Box 
            sx={{width: 1920,
                height: 1080,
                border: "10px",
                backgroundColor: "gray",
            }}
        >
            <div>
                <Header/>
                
            </div>
            <Outlet />
        </Box>
    );
}

export default App;
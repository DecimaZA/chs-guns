import React from "react";
import Header from "./ui/Header";
//import Link from "./Link";
import { Outlet, Link } from "react-router-dom";

import Accessories from "./core-components/Accessories";
import Contact from "./core-components/Contact";
import Home from "./core-components/Home";
import Products from "./core-components/Products";
import Services from "./core-components/Services";
import FaQ from "./core-components/FaQ";
//MUI imports
import Box from "@mui/material/Box";

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
                <Header />
                <Link to="/">
                    <Home />
                </Link>
                <Link to="/products">
                    <Products />
                </Link>
                <Link to="/accessories">
                    <Accessories />
                </Link>
                <Link to="/services">
                    <Services />
                </Link>
                <Link to="/contact">
                    <Contact />
                </Link>
                <Link to="/faq">
                    <FaQ />
                </Link>
            </div>
            <Outlet />
        </Box>
    );
}

export default App;
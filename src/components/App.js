import React from "react";
import Header from "./ui/Header";
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
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/Products">
                        Products
                    </Link>
                    <Link to="/Accessories">
                        Accessories
                    </Link>
                    <Link to="/Services">
                        Services
                    </Link>
                    <Link to="/FAQ">
                        FAQ
                    </Link>
                    <Link to="/Contact">
                        Contact
                    </Link>
            </div>
            <Outlet />
        </Box>
    );
}

export default App;
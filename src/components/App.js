import React from "react";
import Header from "./ui/Header";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
//import Route from "./Route";
import Footer from "./ui/Footer";
//MUI imports
import Box from "@mui/material/Box";

const App = () => {
    return (       
        <Box>
            <Outlet />
            <Footer />
        </Box>
    );
}

export default App;

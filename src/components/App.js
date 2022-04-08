import React from "react";
import Header from "./ui/Header";
import { BrowserRouter, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import Footer from "./ui/Footer";
//MUI imports
import Box from "@mui/material/Box";

const App = () => {
    return (       
        <Box>
            <Box>
                <Header />
            </Box>
            <Outlet />
            <Footer />
        </Box>
    );
}

export default App;

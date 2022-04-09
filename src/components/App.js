import React from "react";
import Header from "./ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "./ui/Footer";
//MUI imports
import Box from "@mui/material/Box";

const App = () => {
    return (       
        <Box>
            <Header />            
            <Outlet />
            
        </Box>
    );
}

export default App;

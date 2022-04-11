import React from "react";
import Header from "./ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "./ui/Footer";
import brandCollage from "./images/logosFolder/brandCollage.png";
import glockLogo from './images/logosFolder/glockLogo.png';
//MUI imports
import {Box, Grid} from "@mui/material/";

const App = () => {
    return (       
        <Box backgroundColor="#cccccc" sx={{width: "100%", height: "100%"}} position="relative">
            <Header />            
            <Outlet /> 
            <Footer />
        </Box>
    );
}

export default App;

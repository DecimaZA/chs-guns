import React from "react";
import Header from "./ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "./ui/Footer";
//MUI imports
import {Box} from "@mui/material/";

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

import React from "react";
import Header from "./ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "./ui/Footer";
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
            </div>
            <Outlet />
            <Footer />
        </Box>
    );
}

export default App;

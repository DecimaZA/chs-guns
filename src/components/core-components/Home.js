import React from "react";
import { Typography } from "@mui/material";

const Home = () => {
    return (
        <Typography 
            variant="p"
            fontSize={18}
            color="primary"
            align="center" 
        >
            <div> 
                <h1>Welcome to CHS Guns!</h1>
                <p>
                    Welcome to CHS Guns, established in 1974 by the late Chris H. Scheidereiter, and delivering great services 
                    and experiences to our clients since! We are not limited in scope of what we offer, going beyond firearms 
                    to service survivalists, less-than-lethal self-defence tools, firearm and non-firearm related accessories, 
                    and much more! 
                    We also specialise in making firearm ownership and carry accessible and convenient for women, no doubt made 
                    easier by the current owner and operator of CHS Guns being a woman herself, and having experienced all the 
                    challenges that women continue to encounter.
                </p>
            </div>
        </Typography>
    );
};

export default Home;
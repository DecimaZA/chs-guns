import React from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

const Link = ({ href, children }) => {
    const onHeaderClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
            <Button
                onClick={onHeaderClick}
                href={href} 
            >
                <Typography 
                    color="#ffffff"
                    fontSize="1rem" 
                >
                    {children}
                </Typography>
            </Button>
    )
};

export default Link;
import React from "react";
import { Button } from "@material-ui/core";
import { ButtonGroup, Typography } from "@mui/material";
import { grey } from "@material-ui/core/colors";

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
                variant="contained"
                size="large"
                disableElevation
            >
                <Typography 
                    color="#ffffff"
                    fontSize="40"
                    
                >
                    {children}
                </Typography>
            </Button>
    )
};

export default Link;
import React from "react";
import theme from "./ui/Themes";
// MUI imports
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material";

const Link = ({ href, children }) => {
    const onHeaderClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
            <ThemeProvider theme={theme}>
            <Button
                variant="primary"
                onClick={onHeaderClick}
                href={href}
            >
                {children}
            </Button>
            </ThemeProvider>
    )
};

export default Link;
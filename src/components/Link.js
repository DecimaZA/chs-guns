import React from "react";
// MUI imports
import Button from '@mui/material/Button';

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
                    {children}
            </Button>
    )
};

export default Link;
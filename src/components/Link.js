import React from "react";
import { Button } from "@material-ui/core";

const Link = ({ href, children }) => {
    const onHeaderClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    
    return (
        <Button 
            style={{ fontSize: 40, color: "#ffffff" }}
            onClick={onHeaderClick} 
            
            href={href} 
            children={children}
        >

        </Button>
    )
};

export default Link;
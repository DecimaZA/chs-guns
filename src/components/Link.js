import React from "react";

const Link = ({ className, href, children }) => {
    const onHeaderClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    
    return <a 
        onClick={onHeaderClick} 
        className={className} 
        href={href} 
        children={children}
    >

    </a>
};

export default Link;
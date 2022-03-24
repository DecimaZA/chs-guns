import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href='/' className="item">
                Home
            </Link>
            <Link href='/products' className="item">
                Products
            </Link>
            <Link href='/accessories' className="item">
                Accessories
            </Link>
            <Link href='/services' className="item">
                services
            </Link>
            <Link href='/faq' className="item">
                FAQ
            </Link>
            <Link href='/contact' className="item">
                Contact Us
            </Link>
        </div>
    );
};

export default Header;
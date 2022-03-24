import React from "react";

import Header from "./Header";

import Accessories from "./core-components/Accessories";
// import Accordion from "./core-components/Accordion";
import Contact from "./core-components/Contact";
import Home from "./core-components/Home";
import Products from "./core-components/Products";
import Services from "./core-components/Services";
import FaQ from "./core-components/FaQ";

import Route from "./Route";

const App = () => {
    return (
        <div>
            <Header />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/products">
                <Products />
            </Route>
            <Route path="/accessories">
                <Accessories />
            </Route>
            <Route path="/services">
                <Services />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/faq">
                <FaQ />
            </Route>
        </div>
    );
}

export default App;
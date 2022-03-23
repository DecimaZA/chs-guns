import React from "react";

import Accessories from "./core-components/Accessories";
import Contact from "./core-components/Contact";
import Home from "./core-components/Home";
import Products from "./core-components/Products";
import Services from "./core-components/Services";

import Route from "./Route";

const App = () => {
    return (
        <div>
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
        </div>
    );
}

export default App;
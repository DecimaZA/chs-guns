import React from "react";
import Header from "./Header";

import Accessories from "./core-components/Accessories";
import Contact from "./core-components/Contact";
import Home from "./core-components/Home";
import Products from "./core-components/Products";
import Services from "./core-components/Services";
import FaQ from "./core-components/FaQ";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Route from "./Route";

const App = () => {
    return (       
        // <Container maxWidth='lg'>
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
        // </Container>
    );
}

export default App;
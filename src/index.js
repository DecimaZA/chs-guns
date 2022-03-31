import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './components/App';

import Home from "./components/core-components/Home";
import Products from "./components/core-components/Products";
import Accessories from "./components/core-components/Accessories";
import Services from "./components/core-components/Services";
import FaQ from "./components/core-components/FaQ";
import Contact from "./components/core-components/Contact";

// ReactDOM.render(
//     <App />, 
//     document.querySelector('#root')
// );

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/products" element={<Products />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<FaQ />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);

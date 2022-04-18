import React from "react";
import { render } from "react-dom";
import App from './components/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/page-components/Home";
import Products from "./components/page-components/Products";
import Services from "./components/page-components/Services";
import Accessories from "./components/page-components/Accessories";
import FAQ from "./components/page-components/FAQ";
import Contact from "./components/page-components/Contact";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path='/home' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/accessories' element={<Accessories />} />
                <Route path='/services' element={<Services />} />
                <Route path='/FAQ' element={<FAQ />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);

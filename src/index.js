import React from "react";
import { render } from "react-dom";
import App from './components/App';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./components/core-components/Home";
import Products from "./components/core-components/Products";
import Services from "./components/core-components/Services";
import Accessories from "./components/core-components/Accessories";
import FaQ from "./components/core-components/FAQ";
import Contact from "./components/core-components/Contact";

// ReactDOM.render(
//     <App />, 
//     document.querySelector('#root')
// );

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='/accessories' element={<Accessories />} />
                <Route path='/services' element={<Services />} />
                <Route path='/FAQ' element={<FaQ />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);

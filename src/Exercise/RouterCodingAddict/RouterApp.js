import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProductsAddict from "./Pages/ProductsAddict";
import Item from "./Pages/Item";
import Navbar from "./Pages/Navbar";

function RouterApp() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/products" exact component={ProductsAddict}/>
                <Route path="/products/:orange" exact component={Item} />

            </Switch>

        </Router>
    )
}

export default RouterApp
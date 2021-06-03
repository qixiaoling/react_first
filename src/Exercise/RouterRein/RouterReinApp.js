import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cats from "./Pages/Cats";
import Gallery from "./Pages/Gallery";
import Navbar from "./Pages/Navbar";
function RouterReinApp(){


    return(
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact={true}>
                        <Home/>
                    </Route>
                    <Route path='/about' exact={true}>
                        <About/>
                    </Route>
                    <Route path='/images/cats' exact={true}>
                        <Cats/>
                    </Route>
                    <Route path='/images/:topic' exact={true}>
                        <Gallery />
                    </Route>
                </Switch>
            </Router>

        </>
    )



}
export default RouterReinApp
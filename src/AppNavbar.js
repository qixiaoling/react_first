import React from "react"
import NavbarCom from "./ComponentsNavbar/NavbarCom"
import "./AppNavbar.css"
import Showcase from "./ComponentsNavbar/Showcase";

const AppNavbar = () => {
    return <div>
        <NavbarCom />
        <div className='main'>
            <Showcase />
        </div>
    </div>
}


export default AppNavbar
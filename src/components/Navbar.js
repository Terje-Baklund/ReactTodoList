import React from "react";
import reactSmallLogo from "../images/logo192.png"

export default function Navbar() {
    return (
        <nav>
            <img className="nav-logo" src={reactSmallLogo}/>
            <h3 className="nav-title">React To-Do List</h3>
        </nav>
    )
}
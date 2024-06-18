import {NavLink} from "react-router-dom";
import React from "react";
import './styles.scss';

const NavBar =() => {
    return (
        <nav className='nav-container'>
            <div className='menu'>
                <NavLink to={"/"}>Home</NavLink>
            </div>
            <NavLink className='nav-item' to={"/profile"}>User</NavLink>
        </nav>
    )
}

export default NavBar;


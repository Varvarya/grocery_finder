import {NavLink} from "react-router-dom";
import React from "react";
import UserImg from './user.png'
import './styles.scss';

const NavBar =() => {
    return (
        <nav className='nav-container'>
            <div className='menu'>
                <NavLink to={"/"}>Grocery Finder</NavLink>
            </div>
            <NavLink className='nav-item' to={"/profile"}>
                <img src={UserImg}/>
            </NavLink>
        </nav>
    )
}

export default NavBar;


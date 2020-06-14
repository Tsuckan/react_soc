import React from "react";
import Style_Classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const Navbar = () =>
{
    return(
        <nav>
            <div className={Style_Classes.Menu_Item}>
                <NavLink activeClassName={Style_Classes.active_link} to="/profile">Profile</NavLink>
            </div>
            <div className={`${Style_Classes.Menu_Item} ${Style_Classes.active}`}>
                <NavLink activeClassName={Style_Classes.active_link} to="/dialogs">Messages</NavLink>
            </div>
            <div className={Style_Classes.Menu_Item}>
                <NavLink activeClassName={Style_Classes.active_link} to="/news">News</NavLink>
            </div>
            <div className={Style_Classes.Menu_Item}>
                <NavLink activeClassName={Style_Classes.active_link} to="/music">Music</NavLink>
            </div>
            <div className={Style_Classes.Menu_Item}>
                <NavLink activeClassName={Style_Classes.active_link} to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
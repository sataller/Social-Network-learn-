import React from "react";
import s from "./Navbar.module.css"
import Friendbar from "./Friendbar/Friendbar.jsx"
import { NavLink } from "react-router-dom"

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <div> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXM4eDD6cRS9t1VQuJXiYJcHQuY7ked1FFETshzM6W4a_ApakH&s"></img>
            </div>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}> Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <Friendbar users={props.state}/>
        </div>
    );
}

export default Navbar
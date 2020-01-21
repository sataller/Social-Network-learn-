import React from "react"
import s from "./User.module.css"
import { NavLink } from "react-router-dom"

const User = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.user}>
            <NavLink to={path} activeClassName={s.active}>
                <div>
                    <img src={props.avatar}></img>
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div>


            )
        }
        
export default User
import React from "react"
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom"

const Dialog = (props) => {
    return (
     
                <div className={s.dialog}>
                    {props.message}
                </div>
    )
}

export default Dialog
import React from "react"
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog"
import User from "./User/User"
import NewMessage from "./NewMessage/NewMessage"
import { NavLink } from "react-router-dom"

const Dialogs = (props) => {

    let userElement = props.state.users.map(u => <User name={ u.name } id={ u.id } avatar={ u.avatar } />);
    let messageElement = props.state.messages.map(m => <Dialog message={ m.message } />);
   
    

    return (
        <div className={ s.dialogs }>
            <div className={ s.users }>
                { userElement }

            </div>
            <div className={ s.messages }>
                <div>
                    { messageElement }
                </div>
                <div>
                   <NewMessage/>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
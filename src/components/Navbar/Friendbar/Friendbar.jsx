import React from "react";
import s from "./Friendbar.module.css"
import User from "../../Dialogs/User/User";

const Friendbar = (props) => {

    let userElement = props.users.users.map(u => <User name={ u.name } id={ u.id } avatar={ u.avatar } />);

    return (
        <div className={ s.friendbar }>
            <div>
                { userElement[0] }
                { userElement[1] }
            </div>
            <div>
                { userElement[2] }
                { userElement[3] }
            </div>

        </div>
    );
}

export default Friendbar


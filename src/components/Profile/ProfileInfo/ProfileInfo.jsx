import React from "react"
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div className={s.info}>
            <img src="https://cdn.civitatis.com/reino-unido/londres/tour-emirates-stadium-grid.jpg"></img>
            <div>avatar + design</div>
        </div>
    )
}

export default ProfileInfo
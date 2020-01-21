import React from "react"
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXM4eDD6cRS9t1VQuJXiYJcHQuY7ked1FFETshzM6W4a_ApakH&s"></img>
            {props.text}
            <p>{props.lickCount} lick</p>
        </div>
    )
}

export default Post
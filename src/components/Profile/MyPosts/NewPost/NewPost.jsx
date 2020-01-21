import React from "react"
import s from "./NewPost.module.css"

const NewPost = (props) => {
    return (
        <div className={s.newPost}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button type="button">Publish</button>
                </div>
            </div>
        </div>
    )
}

export default NewPost
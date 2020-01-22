import React from "react"
import s from "./NewPost.module.css"

const NewPost = (props) => {

    let nwePostElement = React.createRef();

    let addPost = () => {
        debugger;

        let text = nwePostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={s.newPost}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={nwePostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost}>Publish</button>
                </div>
            </div>
        </div>
    )
}

export default NewPost
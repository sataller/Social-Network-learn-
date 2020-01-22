import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post.jsx"
import NewPost from "./NewPost/NewPost.jsx"

const MyPosts = (props) => {
    // в масиве приходят данные с сервера(1). Их мы прогоняем через map(2), 
    // который создаёт массив нужных компонент, заполненный пришедшими данными
    // Дальше массив созданый MAP мы запихиваем на место необходимых компонент (3)

    let postElement = props.posts.map(p => <Post text={p.text} lickCount={p.lickCount} />); //2

    return (
        <div className={s.posts}>
            <NewPost addPost={props.addPost}/>
            {postElement}  {/* 3 */}

        </div>
    )
}

export default MyPosts
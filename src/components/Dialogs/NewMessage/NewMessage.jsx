import React from "react"
import s from "./NewMessage.module.css"

const NewMessage = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {

        let text = newMessage.current.value;
        alert(text);
    }
    return (
     
                <div>
                     <div>
                        <textarea ref={ newMessage }></textarea>
                    </div>
                    <div>
                        <button onClick={ sendMessage }>Send</button>
                    </div>
                </div>
    )
}

export default NewMessage
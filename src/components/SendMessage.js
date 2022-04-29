import { useState } from "react";
import sendIcon from "../pictures/send.png";
import { useSelector, useDispatch } from "react-redux"
import { sendMessage } from '../features/chatsSlice'

const SendMessage = () => {
    const [message, changeMessage] = useState('')

    const dispatch = useDispatch();
    const active_chat_id = useSelector(state => state.chats.active_chat_id)

    const handleChange = (e) => {
        changeMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(message.trim() === "") {
            return;
        }

        dispatch(sendMessage({
            id: Date.now(), 
            is_mine: true, 
            text: message, 
            date: (new Date()).toString(),
            id_to: active_chat_id
        }));

        changeMessage("")
        
        const timeout = (Math.random() * 5 + 10) * 1000;
        setTimeout(handleTimeout, timeout, active_chat_id)
    }

    const handleTimeout = (chat_id) => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(result => {
            dispatch(sendMessage({
                id: Date.now(), 
                is_mine: false, 
                text: result.value, 
                date: (new Date()).toString(),
                id_to: chat_id
            }))
        })
    }

    return(
        <form 
            onSubmit={handleSubmit}
            className="send-message-form">
            <div className="message-container">
                <input
                    type="text" 
                    onChange={handleChange}
                    value={message}
                    placeholder="Type your message"
                />
                <button type="submit" value="Submit" id="btn" className="message-button">
                    <img src={sendIcon} alt="send" width="20"/>
                </button>
            </div>
        </form>
    )
}

export default SendMessage;
import React from "react";
import check from "../pictures/check.png";
import { useSelector } from 'react-redux';

const SenderWindow = () => {
    const chat = useSelector(state => 
        state.chats.chats.find(chat => chat.id === state.chats.active_chat_id)
    )

    return(
        <div className="sender">
            <div className="img">
                <img  className="avatar" src={chat.img_src} alt="avatar" width="50" />
                <img className="check" src={check} alt="check" width="20" height="20" />
            </div>
            <h3>{chat.name}</h3>
        </div>
    )
}

export default SenderWindow;
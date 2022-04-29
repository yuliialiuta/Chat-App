import React from "react";
import { useSelector } from 'react-redux';

const ChatWindow = () => {
    const [chat, messages] = useSelector((state) => {
        const chat = state.chats.chats.find(chat => chat.id === state.chats.active_chat_id);
        
        let reverse_messages = [...chat.messages];
        return [ chat, reverse_messages.reverse() ];
    });

    const translateDate = (date) => (new Date(date)).toLocaleString('en-US');
    
    return(
        <div className="chatWindow">
            {messages.map(message => 
                (message.is_mine)  
                ?   (<div  className="response" key={message.id}>
                        <p className="textMessage">{message.text}</p>
                        <p className="date">{translateDate(message.date)}</p>
                    </div>)
                :   (<div className="message" key={message.id}>
                        <img className="avatar" src={chat.img_src} alt="avatar" width="50" />
                        <div className="profile">
                            <p className="textMessage">{message.text}</p>
                            <p className="date">{translateDate(message.date)}</p>
                        </div>
                    </div>)
                )
            }
        </div>
    )
}

export default ChatWindow;
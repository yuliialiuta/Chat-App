import React from "react";
import check from "../pictures/check.png";

import { useSelector, useDispatch } from "react-redux"
import { switchChat } from '../features/chatsSlice'

const Chats = () => {
    const comp = (chat1, chat2) => {
        const length1 = chat1.messages.length; 
        const length2 = chat2.messages.length;
        if(length1 > 0 && length2 > 0){
            return ( 
                (new Date(chat1.messages[length1 - 1].date)) < 
                (new Date(chat2.messages[length2 - 1].date)) ? 1 : -1
            );
        }
      
        return 0;
    }

    const chats = useSelector((state) => {      
        let sorted_chats = [...state.chats.chats]
        sorted_chats.sort(comp)
        
        return sorted_chats.filter(chat => 
            state.chats.active_filter === "" || 
            chat.name.toLowerCase().includes(state.chats.active_filter.toLowerCase())
        )
    })

    const dispatch = useDispatch()

    const translateShortDate = (date) => {
        const options = {month: "short", day: "numeric", year: "numeric"};
        return (new Date(date)).toLocaleDateString('en-US', options);
    }

    const getLastMessage = (chat) => chat.messages[chat.messages.length - 1];

    return(
        <>
            <h2 className="chatTitle">Chats</h2>
            <div className="chat">
                { chats.map(chat => 
                    <div key={chat.id} onClick={() => dispatch(switchChat(chat.id))}>
                        <div className="img">
                            <img className="avatar" src={chat.img_src} alt="avatar" width="50"/>
                            <img className="check" src={check} alt="check" width="20" />
                        </div>
                        <div className="message">
                            <h5>{chat.name}</h5>
                            <p className="textMessage">{getLastMessage(chat).text}</p>
                        </div>
                        <p className="date">{translateShortDate(getLastMessage(chat).date)}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Chats;
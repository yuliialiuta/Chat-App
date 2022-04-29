import React from "react";
import ChatWindow from "./ChatWindow";
import SenderWindow from "./SenderWindow";
import SendMessage from "./SendMessage";

const RightSide = () => {
    return(
        <div className="rightSide">
            <SenderWindow />
            <ChatWindow />
            <SendMessage />
        </div>
    )
}

export default RightSide;
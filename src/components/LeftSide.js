import React from "react";
import ChatSearch from "./ChatSearch";
import Chats from "./Chats";

const LeftSide = () => {
    return(
        <div className="leftSide">
            <ChatSearch />
            <Chats />
        </div>
    )
}

export default LeftSide;
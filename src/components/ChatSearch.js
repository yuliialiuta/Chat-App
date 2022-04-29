import user from "../pictures/user.png";
import check from "../pictures/check.png";
import searchIcon from "../pictures/magnifying-glass.png";

import { useDispatch } from "react-redux"
import { filterChats } from '../features/chatsSlice'

const ChatSearch = () => {
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        dispatch(filterChats(event.target.value))
    }

    return(
        <div>
            <form className="search">
                <img className="search-user" src={user} alt="user" width="50"/>
                <img className="search-check" src={check} alt="check" width="20" height="20" />
                <div className="search-container">
                    <button type="submit" value="Submit" id="btn" className="search-button">
                        <img src={searchIcon} alt="search" width="20"/>
                    </button>
                    <input
                    type="text"
                    placeholder="Search or start now chat"
                    onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default ChatSearch;
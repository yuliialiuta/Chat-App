import picture1 from "../pictures/michael-dam.jpg";
import picture2 from "../pictures/svyatoslav-romanov.jpg";
import picture3 from "../pictures/alexander-hipp.jpg";
import picture4 from "../pictures/sarah-brown.jpg";
import picture5 from "../pictures/vicky-hladynets.jpg";

const initialChatsState = {
    active_chat_id: 0,
    active_filter: "",
    chats: [
        {
            id: 0,
            name: "Alice Freeman",
            img_src: picture1,
            messages: [
                { id: 0, is_mine: false, text:"You are the worst!", date: (new Date("5/12/17 8:10 PM")).toString(), id_to: 0 }
            ]
        },
        {
            id: 1,
            name: "josefina",
            img_src: picture2,
            messages: [
                { id: 0, is_mine: false, text:"Quickly come to the meeting room 1B, we have a big server issue", date: (new Date("4/22/17 4:00 AM")).toString(), id_to: 1 },
                { id: 1, is_mine: true, text:"I'm having breackfast right now, can't you wait for 10 minutes?", date: (new Date("4/22/17 4:05 AM")).toString(), id_to: 1 },
                { id: 2, is_mine: false, text:"We are losing money!", date: (new Date("4/22/17 4:10 AM")).toString(), id_to: 1 }
            ]
        },
        {
            id: 2,
            name: "Velazquez",
            img_src: picture3,
            messages: [
                { id: 0, is_mine: false, text:"Quickly come to the meeting room 1B, we have a big server issue", date: (new Date("10/05/17 1:20 AM")).toString(), id_to: 2 }
            ]
        },
        {
            id: 3,
            name: "Barrera",
            img_src: picture4,
            messages: [
                { id: 0, is_mine: false, text:"Are you going to join us?", date: (new Date("1/15/17 10:00 PM")).toString(), id_to: 3 }
            ]
        },
        {
            id: 4,
            name: "John",
            img_src: picture5,
            messages: [
                { id: 0, is_mine: false, text:"Where our meeting is taken place?", date: (new Date("8/02/17 4:59 AM")).toString(), id_to: 4 }
            ]
        }
    ]
};

export default initialChatsState
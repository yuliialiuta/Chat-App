import { createSlice } from '@reduxjs/toolkit'
import initialChatsState from './initialState';

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: initialChatsState,
  reducers: {
    switchChat: (state, action) => {
      state.active_chat_id = action.payload;
    },
    sendMessage: (state, action) => {
      state.chats.find((chat) => chat.id === action.payload.id_to).messages.push(action.payload)
    },
    filterChats: (state, action) => {
      state.active_filter = action.payload
    }
  },
})

export const { switchChat, sendMessage, filterChats } = chatsSlice.actions

export default chatsSlice.reducer
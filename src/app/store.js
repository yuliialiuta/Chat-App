import { configureStore } from "@reduxjs/toolkit";
import chatsReducer from '../features/chatsSlice'

const localStorageMiddleware = ({getState}) => {
  return next => action => {
    const result = next(action)
    localStorage.setItem('applicationState', JSON.stringify(getState()))
    return result
  };
};

const getFromLocalStorage = () => {
  if (localStorage.getItem('applicationState') != null) {
    return JSON.parse(localStorage.getItem('applicationState'));
  }
}

export default configureStore({
  reducer: {
    chats: chatsReducer,
  },
  preloadedState: getFromLocalStorage(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware)
})
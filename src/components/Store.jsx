import { configureStore } from '@reduxjs/toolkit';
import bookroomReducer from './BookroomSlice';
import deskReducer from './DeskSlice'; 


const store = configureStore({
  reducer: {
    bookroom: bookroomReducer,
    desk: deskReducer,
  },
});

export default store;
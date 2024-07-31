// deskSlice.js

import { createSlice } from '@reduxjs/toolkit';

const deskSlice = createSlice({
  name: 'desk',
  initialState: {
    location: '',
    date: '',
    bookingSuccess: false,
  },
  reducers: {
    setDeskLocation: (state, action) => {
      state.location = action.payload;
    },
    setDeskDate: (state, action) => {
      state.date = action.payload;
    },
    bookDesk: (state) => {
      if (state.location && state.date) {
        state.bookingSuccess = true;
      }
    },
    resetDeskBooking: (state) => {
      state.location = '';
      state.date = '';
      state.bookingSuccess = false;
    },
  },
});

export const {
  setDeskLocation,
  setDeskDate,
  bookDesk,
  resetDeskBooking,
} = deskSlice.actions;

export default deskSlice.reducer;

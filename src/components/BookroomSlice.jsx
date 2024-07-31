import { createSlice } from '@reduxjs/toolkit';

const bookroomSlice = createSlice({
  name: 'bookroom',
  initialState: {
    location: '',
    date: '',
    employees: '',
    filteredRooms: [],
    searchClicked: false,
    deskLocation: '',
    deskDate: '',
    bookingSuccess: false,
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setFilteredRooms: (state, action) => {
      state.filteredRooms = action.payload;
    },
    setSearchClicked: (state, action) => {
      state.searchClicked = action.payload;
    },
    // New reducers for desk booking
    setDeskLocation: (state, action) => {
      state.deskLocation = action.payload;
    },
    setDeskDate: (state, action) => {
      state.deskDate = action.payload;
    },
    bookDesk: (state) => {
      if (state.deskLocation && state.deskDate) {
        state.bookingSuccess = true;
      }
    },
    resetDeskBooking: (state) => {
      state.deskLocation = '';
      state.deskDate = '';
      state.bookingSuccess = false;
    },
  },
});

export const {
  setLocation,
  setDate,
  setEmployees,
  setFilteredRooms,
  setSearchClicked,
  setDeskLocation,
  setDeskDate,
  bookDesk,
  resetDeskBooking,
} = bookroomSlice.actions;

export default bookroomSlice.reducer;

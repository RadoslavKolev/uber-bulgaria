// Pushing info to the data layer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Default values
  origin: null,
  destination: null,
  travelTimeInformation: null
};

// Creating the slice from the toolkit
export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Exporting the navigation actions
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Pulling data from the data layer
// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

// Export the navigation slice
// Goes to store.js
export default navSlice.reducer;
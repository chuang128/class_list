import { createSlice } from "@reduxjs/toolkit";

type OverlayState = {
  isOverlayOpen: boolean;
};

const initialState: OverlayState = {
  isOverlayOpen: false,
};

const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    openOverlay: (state) => {
      state.isOverlayOpen = true;
    },
    closeOverlay: (state) => {
      state.isOverlayOpen = false;
    },
  },
});

export const { openOverlay, closeOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;

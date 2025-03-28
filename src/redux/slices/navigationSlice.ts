import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TabKey } from "../../types";

type NavigationState = {
  isOverlayOpen: boolean;
  isMenuOpen: boolean;
  activeTab: TabKey;
};

const initialState: NavigationState = {
  isOverlayOpen: false,
  isMenuOpen: false,
  activeTab: "student",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    openOverlay: (state: NavigationState) => {
      state.isOverlayOpen = true;
    },
    closeOverlay: (state: NavigationState) => {
      state.isOverlayOpen = false;
    },
    toggleMenu: (state: NavigationState) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setTab: (state, action: PayloadAction<TabKey>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { openOverlay, closeOverlay, toggleMenu, setTab } =
  navigationSlice.actions;

export default navigationSlice.reducer;

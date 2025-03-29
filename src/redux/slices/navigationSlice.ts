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
      state.isMenuOpen = false;
      state.isOverlayOpen = true;
    },
    closeOverlay: (state: NavigationState) => {
      state.isOverlayOpen = false;
    },
    openMenu: (state: NavigationState) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state: NavigationState) => {
      state.isMenuOpen = false;
    },
    setTab: (state: NavigationState, action: PayloadAction<TabKey>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { openOverlay, closeOverlay, openMenu, closeMenu, setTab } =
  navigationSlice.actions;

export default navigationSlice.reducer;

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { TabKey } from "../types";
import {
  openOverlay,
  setTab,
  openMenu,
  closeMenu,
  closeOverlay,
  closeDisplay,
} from "../redux/slices/navigationSlice";
import { useEffect, useRef } from "react";

export const useNavigation = () => {
  const dispatch: AppDispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);

  const { activeTab, isMenuOpen, isOverlayOpen, isDisplayOpen } = useSelector(
    (state: RootState) => state.navigation
  );

  const handleOpenMenu = () => dispatch(openMenu());
  const handleCloseMenu = () => dispatch(closeMenu());
  const handleSwitchTab = (tab: TabKey) => dispatch(setTab(tab));
  const handleOpenInvitation = () => dispatch(openOverlay());
  const handleCloseInvitation = () => dispatch(closeOverlay());
  const handleCloseDisplay = () => dispatch(closeDisplay());

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleCloseMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    activeTab,
    handleSwitchTab,
    handleOpenMenu,
    handleCloseMenu,
    handleOpenInvitation,
    handleCloseInvitation,
    handleCloseDisplay,
    isMenuOpen,
    isDisplayOpen,
    isOverlayOpen,
    menuRef,
  };
};

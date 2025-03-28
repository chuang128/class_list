import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { TabKey } from "../types";
import {
  openOverlay,
  setTab,
  toggleMenu,
} from "../redux/slices/navigationSlice";

export const useNavigation = () => {
  const dispatch: AppDispatch = useDispatch();

  const { activeTab, isMenuOpen } = useSelector(
    (state: RootState) => state.navigation
  );

  const handleToggleMenu = () => dispatch(toggleMenu());
  const handleSwitchTab = (tab: TabKey) => dispatch(setTab(tab));
  const handleOpenInvitation = () => dispatch(openOverlay());

  return {
    activeTab,
    handleSwitchTab,
    handleToggleMenu,
    handleOpenInvitation,
    isMenuOpen,
  };
};

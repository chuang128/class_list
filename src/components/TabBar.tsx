import styled from "@emotion/styled";
import Menu from "./Menu";
import { TabKey } from "../types";
import { TabList } from "./TabList";

const TabName = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ active }) => (active ? "#fff" : "#e0e0e0")};
  color: ${({ active }) => (active ? "#007bff" : "#333")};
  cursor: pointer;
  box-shadow: ${({ active }) =>
    active ? "0 -2px 6px rgba(0, 0, 0, 0.1)" : "none"};
  transition: background-color 0.2s ease, color 0.2s ease;
`;

const TabBarWrapper = styled.div`
  display: flex;
  gap: 8px;
  background-color: transparent;
  justify-content: space-between;
`;

type TabBarProps = {
  isMenuOpen: boolean;
  activeTab: TabKey;
  onToggleMenu: () => void;
  onSwitchTab: (selectedTab: TabKey) => void;
  onOpenInvitation: () => void;
};

const TabBar: React.FC<TabBarProps> = ({
  isMenuOpen,
  activeTab,
  onToggleMenu,
  onSwitchTab,
  onOpenInvitation,
}) => {
  return (
    <TabBarWrapper>
      <div>
        {TabList.map((tab) => (
          <TabName
            key={tab.key}
            active={activeTab === tab.key}
            onClick={() => onSwitchTab(tab.key)}
          >
            {tab.label}
          </TabName>
        ))}
      </div>
      <Menu
        isMenuExpanded={isMenuOpen}
        onToggleMenu={onToggleMenu}
        onOpenInvitation={onOpenInvitation}
      />
    </TabBarWrapper>
  );
};

export default TabBar;

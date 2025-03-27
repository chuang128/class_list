import styled from "@emotion/styled";
import { TabKey, TabList } from "./TabList";
import Menu from "../Menu";

type TabBarProps = {
  activeTab: TabKey;
  onSwitchTab: (tab: TabKey) => void;
  onClickMenu: () => void;
  isMenuExpanded: boolean;
};

const Tab = styled.button<{ active: boolean }>`
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
  padding: 0 0 12px;
  background-color: transparent;
  justify-content: space-between;
`;

const TabBar: React.FC<TabBarProps> = ({
  activeTab,
  onSwitchTab,
  onClickMenu,
  isMenuExpanded,
}) => {
  return (
    <TabBarWrapper>
      <div>
        {TabList.map((tab) => (
          <Tab
            key={tab.key}
            active={activeTab === tab.key}
            onClick={() => onSwitchTab(tab.key)}
          >
            {tab.label}
          </Tab>
        ))}
      </div>
      <Menu isMenuExpanded={isMenuExpanded} onToggleMenu={onClickMenu} />
    </TabBarWrapper>
  );
};

export default TabBar;

import styled from "@emotion/styled";
import { BsThreeDotsVertical } from "react-icons/bs";

const MenuWrapper = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 10;
  min-width: 140px;
`;

const MenuItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

type MenuProps = {
  isMenuExpanded: boolean;
  onToggleMenu: () => void;
  onOpenInvitation: () => void;
};

const Menu: React.FC<MenuProps> = ({
  isMenuExpanded,
  onToggleMenu,
  onOpenInvitation,
}) => (
  <MenuWrapper>
    <MenuButton onClick={onToggleMenu}>
      <BsThreeDotsVertical size={20} />
    </MenuButton>
    {isMenuExpanded && (
      <List>
        <MenuItem onClick={onOpenInvitation}>Show QR code</MenuItem>
      </List>
    )}
  </MenuWrapper>
);

export default Menu;

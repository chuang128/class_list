import { FaUser } from "react-icons/fa";
import styled from "@emotion/styled";
import { BoxStencil } from "../components/Stencil";
import TabBar from "../components/TabBar";
import { TabList } from "../components/TabList";
import { useClassRoom } from "../hooks/useClassRoom";
import { useNavigation } from "../hooks/useNavigation";

const Container = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  max-width: 750px;
  margin: 40px auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
`;

const Subject = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const SeatInfo = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  gap: 4px;
`;

const ClassRoomController = () => {
  const { classRoom, loading } = useClassRoom();
  const {
    activeTab,
    handleSwitchTab,
    handleToggleMenu,
    handleOpenInvitation,
    isMenuOpen,
  } = useNavigation();

  const currentTab = TabList.find((tab) => tab.key === activeTab);

  return (
    <Container>
      <Header>
        {loading || !classRoom ? (
          <>
            <BoxStencil width="100px" height="20px" />
            <BoxStencil width="60px" height="20px" />
          </>
        ) : (
          <>
            <Subject>
              {classRoom.id} {classRoom.subject}
            </Subject>
            <SeatInfo>
              <FaUser size={14} />
              {classRoom.students.length}/{classRoom.totalSeat}
            </SeatInfo>
          </>
        )}
      </Header>
      <>
        <TabBar
          activeTab={activeTab}
          onSwitchTab={handleSwitchTab}
          onToggleMenu={handleToggleMenu}
          isMenuOpen={isMenuOpen}
          onOpenInvitation={handleOpenInvitation}
        />
        {currentTab && currentTab.render()}
      </>
    </Container>
  );
};

export default ClassRoomController;

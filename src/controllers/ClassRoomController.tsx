import { FaUser } from "react-icons/fa";
import styled from "@emotion/styled";
import { BoxStencil } from "../components/Stencil";
import TabBar from "../components/TabBar";
import { TabList } from "../components/TabList";
import { useClassRoom } from "../hooks/useClassRoom";
import { useNavigation } from "../hooks/useNavigation";
import OverlayController from "./OverlayController";
import ErrorPage from "../components/ErrorPage";

const Container = styled.div<{ visible: boolean }>`
  background-color: #ebebeb;
  border-radius: 12px;
  max-width: 750px;
  margin: 40px auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

export const CloseButtonWrapper = styled.div`
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #000;
  }
`;

const HeaderWrapper = styled.div`
  padding: 18px 18px 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
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

const TabContentWrapper = styled.div`
  max-height: 510px;
  overflow-y: auto;
`;

const ClassRoomController = () => {
  const { classRoom, loading, error, handleRefetch } = useClassRoom();
  const {
    activeTab,
    handleSwitchTab,
    handleOpenInvitation,
    isMenuOpen,
    isOverlayOpen,
    menuRef,
    handleOpenMenu,
    isDisplayOpen,
    handleCloseDisplay,
  } = useNavigation();

  if (error) {
    return <ErrorPage onRefetch={handleRefetch} message={error} />;
  }

  const currentTab = TabList.find((tab) => tab.key === activeTab);

  return (
    <Container visible={isDisplayOpen} className="ClassRoom_Container">
      <CloseButtonWrapper>
        <CloseButton onClick={handleCloseDisplay}>x</CloseButton>
      </CloseButtonWrapper>
      {isOverlayOpen ? (
        <OverlayController />
      ) : (
        <div>
          <HeaderWrapper>
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
            <TabBar
              activeTab={activeTab}
              onSwitchTab={handleSwitchTab}
              onOpenMenu={handleOpenMenu}
              isMenuOpen={isMenuOpen}
              onOpenInvitation={handleOpenInvitation}
              menuRef={menuRef}
            />
          </HeaderWrapper>
          <TabContentWrapper>
            {currentTab && currentTab.render()}
          </TabContentWrapper>
        </div>
      )}
    </Container>
  );
};

export default ClassRoomController;

import { useEffect, useState } from "react";
import { fetchClassroom } from "../api/classApi";
import { FaUser } from "react-icons/fa";
import { Class } from "../types";
import styled from "@emotion/styled";
import { BoxStencil } from "../components/Stencil";
import { TabList, TabKey } from "../components/Tabs/TabList";
import TabBar from "../components/Tabs/TabBar";

const Container = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  max-width: 750px;
  margin: 40px auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const StencilWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  padding: 16px;
  background-color: #ebebeb;
  border-radius: 8px;
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
  const [classRoom, setClassRoom] = useState<Class | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabKey>("student");
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchClassroom();
      setClassRoom(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const updateStudentScore = (id: number, delta: number) => {
    // safeguard against when classRoom is null
    if (!classRoom) return;

    const updatedStudents = classRoom.students.map((student) =>
      student.id === id
        ? {
            ...student,
            score: student.score + delta,
          }
        : student
    );

    setClassRoom({ ...classRoom, students: updatedStudents });
  };

  const handleScoreIncrement = (id: number) => updateStudentScore(id, 1);
  const handleScoreDecrement = (id: number) => updateStudentScore(id, -1);

  const handleSwitchTab = (tab: TabKey) => {
    setActiveTab(tab);
  };

  const handleToggleMenu = () => setIsMenuExpanded(!isMenuExpanded);

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
      {loading || !classRoom ? (
        <StencilWrapper>
          {Array.from({ length: 20 }).map((_, i) => (
            <BoxStencil key={i} width="100%" height="90px" />
          ))}
        </StencilWrapper>
      ) : (
        <>
          <TabBar
            activeTab={activeTab}
            onSwitchTab={handleSwitchTab}
            onClickMenu={handleToggleMenu}
            isMenuExpanded={isMenuExpanded}
          />
          {TabList.find((tab) => tab.key === activeTab)?.render({
            classRoom,
            handleScoreIncrement,
            handleScoreDecrement,
          })}
        </>
      )}
    </Container>
  );
};

export default ClassRoomController;

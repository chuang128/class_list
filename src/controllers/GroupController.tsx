import styled from "@emotion/styled";
import { useClassRoom } from "../hooks/useClassRoom";

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const GroupBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  background-color: #f9f9f9;
`;

const GroupTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StudentList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const StudentName = styled.div`
  background-color: #ebebeb;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
`;

const GroupController: React.FC = () => {
  const { classRoom } = useClassRoom();

  if (!classRoom) {
    return <p>No groups available.</p>;
  }

  return (
    <GroupWrapper>
      {classRoom.groups.map((studentGroup, index) => (
        <GroupBox key={index}>
          <GroupTitle>Group {index + 1}</GroupTitle>
          <StudentList>
            {studentGroup.map((student) => (
              <StudentName key={student.id}>{student.name}</StudentName>
            ))}
          </StudentList>
        </GroupBox>
      ))}
    </GroupWrapper>
  );
};

export default GroupController;

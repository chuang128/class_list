import styled from "@emotion/styled";
import { Group as GroupType } from "../types";

type Props = {
  groups: GroupType[];
};

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

const Student = styled.div`
  background-color: #ebebeb;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
`;

const Group: React.FC<Props> = ({ groups }) => {
  if (!groups.length) return <p>No groups available.</p>;

  return (
    <GroupWrapper>
      {groups.map((group, index) => (
        <GroupBox key={index}>
          <GroupTitle>Group {index + 1}</GroupTitle>
          <StudentList>
            {group.students.map((student) => (
              <Student key={student.id}>{student.name}</Student>
            ))}
          </StudentList>
        </GroupBox>
      ))}
    </GroupWrapper>
  );
};

export default Group;

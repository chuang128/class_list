import styled from "@emotion/styled";
import { Student } from "../types";

const CardWrapper = styled.div`
  width: 100px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  font-family: sans-serif;
`;

const Header = styled.div<{ present: boolean }>`
  background-color: ${({ present }) => (present ? "#007bff" : "#ccc")};
  color: white;
  padding: 4px 0;
  font-weight: bold;
`;

export const Name = styled.div`
  padding: 12px 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  padding: 4px 6px;
`;

export const Button = styled.button<{ add: boolean; present: boolean }>`
  background-color: ${({ add, present }) =>
    !present ? "#ccc" : add ? "#7acc3f" : "#ed476b"};
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  padding: 2px 6px;
  cursor: pointer;
`;

const ScoreDisplay = styled.div`
  min-width: 24px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

type StudentCardProps = Student & {
  present: boolean;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
};

const StudentCard: React.FC<StudentCardProps> = ({
  id,
  name,
  score,
  present,
  onIncrement,
  onDecrement,
}) => {
  const adjustedID = id.toString().padStart(2, "0");

  return (
    <CardWrapper>
      <Header present={present}>{adjustedID}</Header>
      <Name>{name}</Name>
      <Controls>
        <Button
          disabled={!present}
          onClick={() => present && onDecrement(id)}
          add={false}
          present={present}
        >
          -1
        </Button>
        <ScoreDisplay>{score}</ScoreDisplay>
        <Button
          disabled={!present}
          onClick={() => present && onIncrement(id)}
          add
          present={present}
        >
          +1
        </Button>
      </Controls>
    </CardWrapper>
  );
};

export default StudentCard;

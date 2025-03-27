import styled from "@emotion/styled";
import { Class } from "../types";
import StudentCard from "./StudentCard";

const Wrapper = styled.div`
  display: grid;
  gap: 12px;
  padding: 16px;
  background-color: #ebebeb;
  border-radius: 8px;

  grid-template-columns: repeat(5, 1fr); // default: 5 per row

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr); // mobile: 2 per row
  }
`;

type ClassRoomProps = Class & {
  handleScoreIncrement: (id: number) => void;
  handleScoreDecrement: (id: number) => void;
};

const ClassRoom: React.FC<ClassRoomProps> = ({
  students,
  totalSeat,
  handleScoreIncrement,
  handleScoreDecrement,
}) => {
  // just in case the students list isnt sorted on the BE, this is just an extra layer of calculation.
  const sortedStudents = students.sort((a, b) => a.id - b.id);
  let studentIndex = 0;

  const seats = Array.from({ length: totalSeat }, (_, i) => {
    const seatNumber = i + 1;
    const student = sortedStudents[studentIndex];

    if (student && student.id === seatNumber) {
      studentIndex++;
      return { ...student, present: true };
    }

    return {
      id: seatNumber,
      name: "Guest",
      score: 0,
      present: false,
    };
  });

  return (
    <Wrapper>
      {seats.map((student) => (
        <StudentCard
          onDecrement={handleScoreDecrement}
          onIncrement={handleScoreIncrement}
          key={student.id}
          {...student}
        />
      ))}
    </Wrapper>
  );
};

export default ClassRoom;

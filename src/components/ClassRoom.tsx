import styled from "@emotion/styled";
import { Class } from "../types";
import StudentCard from "./StudentCard";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
  padding: 16px;
  max-width: 550px;
  margin: 0 auto;
  background-color: #ebebeb;
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

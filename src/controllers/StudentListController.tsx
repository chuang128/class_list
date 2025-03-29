import styled from "@emotion/styled";
import StudentCard from "../components/StudentCard";
import { useClassRoom } from "../hooks/useClassRoom";
import { BoxStencil } from "../components/Stencil";

const StencilWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  padding: 18px;
  background-color: #f9f9f9;
`;

const StudentCardWrapper = styled.div`
  display: grid;
  gap: 12px;
  padding: 18px;
  background-color: #f9f9f9;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StudentListController: React.FC = () => {
  const { classRoom, handleScoreIncrement, handleScoreDecrement } =
    useClassRoom();

  // if class isnt available just display skeleton
  if (!classRoom) {
    return (
      <StencilWrapper>
        {Array.from({ length: 20 }).map((_, i) => (
          <BoxStencil key={i} width="100%" height="90px" />
        ))}
      </StencilWrapper>
    );
  }

  const { students, totalSeat } = classRoom;

  // just in case the students list isnt sorted on the BE, this is just an extra layer of calculation.
  const sortedStudents = [...students].sort((a, b) => a.id - b.id);
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
    <StudentCardWrapper>
      {seats.map((student) => (
        <StudentCard
          onDecrement={handleScoreDecrement}
          onIncrement={handleScoreIncrement}
          key={student.id}
          {...student}
        />
      ))}
    </StudentCardWrapper>
  );
};

export default StudentListController;

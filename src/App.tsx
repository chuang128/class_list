import { useEffect, useState } from "react";
import { fetchClassroom } from "./api/classApi";
import ClassRoom from "./components/ClassRoom";
import { Class } from "./types";
import styled from "@emotion/styled";
import StudentCardSkeleton from "./components/StudentCardSkeleton";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
  padding: 16px;
  max-width: 550px;
  margin: 0 auto;
  background-color: #ebebeb;
`;

function App() {
  const [classRoom, setClassRoom] = useState<Class | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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

  return (
    <div>
      {loading || !classRoom ? (
        <Wrapper>
          {Array.from({ length: 20 }).map((_, i) => (
            <StudentCardSkeleton key={i} />
          ))}
        </Wrapper>
      ) : (
        <ClassRoom
          {...classRoom}
          handleScoreIncrement={handleScoreIncrement}
          handleScoreDecrement={handleScoreDecrement}
        />
      )}
    </div>
  );
}

export default App;

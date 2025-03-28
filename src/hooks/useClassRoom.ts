import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  fetchClassRoomData,
  updateStudentScore,
} from "../redux/slices/classRoomSlice";

export const useClassRoom = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    data: classRoom,
    loading,
    error,
  } = useSelector((state: RootState) => state.classRoom);

  useEffect(() => {
    if (!classRoom) {
      dispatch(fetchClassRoomData());
    }
  }, [dispatch, classRoom]);

  const handleRefetch = () => dispatch(fetchClassRoomData());

  const handleScoreIncrement = (id: number) =>
    dispatch(updateStudentScore({ id, delta: 1 }));
  const handleScoreDecrement = (id: number) =>
    dispatch(updateStudentScore({ id, delta: -1 }));

  return {
    classRoom,
    loading,
    error,
    handleRefetch,
    handleScoreIncrement,
    handleScoreDecrement,
  };
};

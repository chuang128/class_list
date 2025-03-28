import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Class } from "../../types";
import { fetchClass } from "../../api/class";

type ClassRoomState = {
  data: Class | null;
  loading: boolean;
  error: string | null;
};

export const fetchClassRoomData = createAsyncThunk("class/fetch", async () => {
  const data = await fetchClass();
  return data;
});

const initialState: ClassRoomState = {
  data: null,
  loading: false,
  error: null,
};

const classRoomSlice = createSlice({
  name: "classRoom",
  initialState,
  reducers: {
    updateStudentScore: (
      state,
      action: PayloadAction<{ id: number; delta: number }>
    ) => {
      const { id, delta } = action.payload;
      if (!state.data) return;

      state.data.students = state.data.students.map((student) =>
        student.id === id
          ? { ...student, score: student.score + delta }
          : student
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClassRoomData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClassRoomData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchClassRoomData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error occurred";
      });
  },
});

export const { updateStudentScore } = classRoomSlice.actions;

export default classRoomSlice.reducer;

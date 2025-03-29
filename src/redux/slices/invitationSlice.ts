import { fetchJoinInfo } from "../../api/invitation";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { JoinInfo } from "../../types";

type InvitationState = {
  joinInfo: JoinInfo | null;
  loading: boolean;
  error: string | null;
};

export const fetchInvitationData = createAsyncThunk<JoinInfo>(
  "invitation/fetch",
  async () => {
    {
      const data = await fetchJoinInfo();
      return data;
    }
  }
);
const initialState: InvitationState = {
  loading: false,
  error: null,
  joinInfo: null,
};

const invitationSlice = createSlice({
  name: "invitation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvitationData.pending, (state: InvitationState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchInvitationData.fulfilled,
        (state: InvitationState, action) => {
          state.loading = false;
          state.joinInfo = action.payload;
        }
      )
      .addCase(
        fetchInvitationData.rejected,
        (state: InvitationState, action) => {
          state.loading = false;
          state.error =
            action.error.message || "Something was wrong fetching join info";
        }
      );
  },
});

export default invitationSlice.reducer;

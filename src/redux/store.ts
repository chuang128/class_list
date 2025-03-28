import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import classRoomReducer from "./slices/classRoomSlice";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    classRoom: classRoomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import userVoteReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userVoteReducer,
  },
});

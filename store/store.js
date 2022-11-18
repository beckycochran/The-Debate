import { configureStore } from "@reduxjs/toolkit";
import userVoteReducer from "./slices/userSlice";

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    user: userVoteReducer,
  },
});
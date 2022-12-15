//file contains all the reducer logic and actions specifically for the orders
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vote: "not-voted",
    user: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeVote: (state, action) => {
            state.vote = action.payload
        },
        updateUser: (state, action) => {
            state.user = action.payload
        }
    },
});

export const { changeVote, updateUser } = userSlice.actions;

export const selectVote = (state) => state.user.vote;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer

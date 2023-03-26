//file contains all the reducer logic and actions specifically for the orders
//stuff regarding createAsyncThunk() https://jasonwatmore.com/post/2022/06/21/react-redux-http-post-request-in-async-action-with-createasyncthunk
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    vote: "not-voted",
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeVote: (state, action) => {
            console.log(`action.payload: ${action.payload}`)
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

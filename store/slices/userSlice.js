//file contains all the reducer logic and actions specifically for the orders
//following walkthrough: https://towardsdev.com/setup-and-use-redux-toolkit-with-next-js-begineers-guide-5ebc32eef31e
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vote: "not-voted"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //Actions

        //change vote
        changeVote: (state, action) => {
            console.log(state, action)
            state.vote = action.payload
        },
    },
});

export const { changeVote } = userSlice.actions;

//Selectors - this is how we pull information from the global store slice

export const selectVote = (state) => state.user.vote;


export default userSlice.reducer
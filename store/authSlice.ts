import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import {AppState} from "./store"; 

export interface AuthState {
    authState: boolean;
}

const initialState: AuthState = {
    authState: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //action to set the auth statuss
        setAuthState(state, action) {
            state.authState = action.payload;
        },
        //special reducer for hydrating the state. Special case next-redux-wrapper
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.auth
                };
            },
        },
    },
});


export const {setAuthState} = authSlice.actions;
export const selectAuthState = (state: AppState) => state.auth.authState;
export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    userName: null,
    isLoggedIn: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action)=>{
            state.userName = action.payload.userName;
            state.userId = action.payload.userId;
            state.isLoggedIn = true;
        },
        logoutUser: (state) =>{
            state.userName = null;
            state.userId = null;
            state.isLoggedIn = false;
        }
    }

});

export const selectUserName = (state) => state.user.userName;
export const selectUserId = (state) => state.user.userId;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export const {loginUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import messageReducerSlice from "./message-reducer";
import profileReducerSlice from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducerSlice from "./user-reducer";


let store = configureStore({
    reducer: {
        profilePage: profileReducerSlice,
        dialogPage: messageReducerSlice,
        sidebarPage: sidebarReducer,
        usersPage: usersReducerSlice
    }
});

export default store;
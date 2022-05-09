import { configureStore } from "@reduxjs/toolkit";
import messageReducerSlice from "./message-reducer";
import profileReducerSlice from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = configureStore({
    reducer: {
        profilePage: profileReducerSlice,
        dialogPage: messageReducerSlice,
        sidebar: sidebarReducer
    }
});

export default store;
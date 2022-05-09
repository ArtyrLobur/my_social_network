import { configureStore } from "@reduxjs/toolkit";
import messageReducerSlice from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogPage: messageReducerSlice,
        sidebar: sidebarReducer
    }
});

export default store;
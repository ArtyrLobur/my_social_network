import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogPage: messageReducer,
        sidebar: sidebarReducer
    }
});

export default store;
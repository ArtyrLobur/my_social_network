import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    users: [
        // { id: 1, photoUrl: 'https://img.freepik.com/free-photo/young-female-tennis-player-with-racket_23-2149127367.jpg?t=st=1654778312~exp=1654778912~hmac=31bd6425bc7023a53dd6cd3d164b40fcbd152bde730910ff082b3e9bd339ce3b&w=1380', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, photoUrl: 'https://img.freepik.com/free-photo/young-female-tennis-player-with-racket_23-2149127367.jpg?t=st=1654778312~exp=1654778912~hmac=31bd6425bc7023a53dd6cd3d164b40fcbd152bde730910ff082b3e9bd339ce3b&w=1380', followed: true, fullName: 'Artur', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
        // { id: 3, photoUrl: 'https://img.freepik.com/free-photo/young-female-tennis-player-with-racket_23-2149127367.jpg?t=st=1654778312~exp=1654778912~hmac=31bd6425bc7023a53dd6cd3d164b40fcbd152bde730910ff082b3e9bd339ce3b&w=1380', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Krakow', country: 'Poland' } }
    ],

}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        return axios.get('https://social-network.samuraijs.com/api/1.0/users')
    },
);


const usersReducerSlice = createSlice({
    name: 'users',
    initialState,

    reducers: {
        follow: (state, action) => {
            state.users.forEach((u, i) => {
                if (u.id === action.payload) {
                    state.users[i].followed = true;
                }
            })
        },
        unFollow: (state, action) => {
            state.users.forEach((u, i) => {
                if (u.id === action.payload) {
                    state.users[i].followed = false;
                }
            })
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
    },
    extraReducers: (builder) => {
       // Add reducers for additional action types here, and handle loading state as needed
       builder.addCase(getUsers.fulfilled, (state, action) => {
           // Add user to the state array
           state.users = action.payload.data.items
       })
       builder.addCase(getUsers.rejected, (state, action) => {
           // Add user to the state array
            state.users = action.payload.data.items
       })
   },
})

export const { follow, unFollow, setUsers } = usersReducerSlice.actions;
export default usersReducerSlice.reducer;
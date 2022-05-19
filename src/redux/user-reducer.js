import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, followed: true, fullName: 'Artur', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
        { id: 3, followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Krakow', country: 'Poland' } }
    ]

};

const usersReducerSlice = createSlice({
    name: 'users',
    initialState,

    reducers: {
        follow: (state, action) => {
            state.users.map(u => {
                if (u.id === action.userId) {
                    return { ...u, followed: true}
                }
                return u;
            })
        },
        unFollow: (state, action) => {
            state.users.map(u => {
                if (u.id === action.userId) {
                    return { ...u, followed: false}
                }
                return u;
            })
        },
        setUsers: state => {

        }
    }
})

export default usersReducerSlice;
import axios from "axios";
import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://scontent.fiev8-2.fna.fbcdn.net/v/t39.30808-6/272745595_6833382506732937_3575085819718476552_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Y06kymggRCoAX_MuUyg&_nc_ht=scontent.fiev8-2.fna&oh=00_AT_dbvM3oM1KVMqTYFwMptEtJGQ7wsrO2myDzauwKRIH8w&oe=628C1ADC', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, photoUrl: 'https://scontent.fiev8-2.fna.fbcdn.net/v/t39.30808-6/272745595_6833382506732937_3575085819718476552_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Y06kymggRCoAX_MuUyg&_nc_ht=scontent.fiev8-2.fna&oh=00_AT_dbvM3oM1KVMqTYFwMptEtJGQ7wsrO2myDzauwKRIH8w&oe=628C1ADC', followed: true, fullName: 'Artur', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
        { id: 3, photoUrl: 'https://scontent.fiev8-2.fna.fbcdn.net/v/t39.30808-6/272745595_6833382506732937_3575085819718476552_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Y06kymggRCoAX_MuUyg&_nc_ht=scontent.fiev8-2.fna&oh=00_AT_dbvM3oM1KVMqTYFwMptEtJGQ7wsrO2myDzauwKRIH8w&oe=628C1ADC', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Krakow', country: 'Poland' } }
    ],

}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectedWithValue, dispatch }) => {
        const res = await axios.get('https://social-network.samuraijs.com/api/1.0/users')
        dispatch(setUsers(res.data.items))
    },
)

// const responseUsers = axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//     console.log(response);
// })


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
    }
})

export const { follow, unFollow, setUsers } = usersReducerSlice.actions;
export default usersReducerSlice.reducer;
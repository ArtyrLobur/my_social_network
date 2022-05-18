import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  messages: [
    { id: 1, name: "Dima", message: "Hi" },
    { id: 2, name: "Andrey", message: "How are you?" },
    { id: 3, name: "Sveta", message: "Yo" },
    { id: 4, name: "Sasha", message: "My english is beautiful" },
    { id: 5, name: "Viktor", message: "Privet Ded" },
    { id: 6, name: "Artyr", message: "Nice car" },
  ],
  newMessageText: ''
}

const messageReducerSlice = createSlice({
  name: 'messages',
  initialState,

  reducers: {
    addMessages: state => {

      state.messages.push({id: 7, name: 'Artur', message: state.newMessageText});
      state.newMessageText='';
    },
    updateMesseges: (state, action) => {
      state.newMessageText = action.payload;
    }
  }
})

export const {addMessages, updateMesseges} = messageReducerSlice.actions;
export default messageReducerSlice.reducer;
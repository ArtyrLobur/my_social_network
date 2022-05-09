import { createSlice } from "@reduxjs/toolkit";

// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_MESSAGES = 'UPDATE-MESSAGES';

let initialState = {
  messages: [
    { id: 1, name: "Dima", message: "Hi" },
    { id: 2, name: "Andrey", message: "How are you?" },
    { id: 3, name: "Sveta", message: "Yo" },
    { id: 4, name: "Sasha", message: "My english is beautiful" },
    { id: 5, name: "Viktor", message: "Privet Ded" },
    { id: 6, name: "Artyr", message: "Nice car" },
  ],
  newMessageText: 'write message'
}

const messageReducerSlice = createSlice({
  name: 'messages',
  initialState,

  reducers: {
    addMessages: state => {
      let newMessage = {
        id: 7,
        name: 'Artur',
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
          state.newMessageText='';
    },
    updateMesseges: (state, action) => {
      state.newMessageText = action.newMessage;
    }
  }
})


// const messageReducer1 = (state = initialState, action) => {
    
//     switch (action.type) {
//         case ADD_MESSAGE:
//           let newMessage = {
//             id: 7,
//             name: 'Artur',
//             message: state.newMessageText,
//           };
          
//           state.messages.push(newMessage);
//           state.newMessageText='';
//           return state;
        
//         case UPDATE_MESSAGES:
//             state.newMessageText = action.newMessage;
//             return state;

//         default:
//             return state;
//         } 
// }

export const {addMessages, updateMesseges} = messageReducerSlice.actions;
// export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})
// export const updateNewMessageTextActionCreator = (message) => ({ type: UPDATE_MESSAGES, newMessage: message })

export default messageReducerSlice.reducer;
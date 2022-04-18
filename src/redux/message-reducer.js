const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGES = 'UPDATE-MESSAGES';

const messageReducer = (state, action) => {
    
    if (action.type === ADD_MESSAGE) {
          let newMessage = {
            id: 7,
            name: 'Artur',
            message: state.newMessageText,
          };
          
          state.messages.push(newMessage);
          state.newMessageText='';
        }
    
        else if (action.type === UPDATE_MESSAGES) {
          state.newMessageText = action.newMessage;
        } 

    return state;
}

export default messageReducer;
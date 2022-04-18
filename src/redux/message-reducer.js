const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGES = 'UPDATE-MESSAGES';

const messageReducer = (state, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:
          let newMessage = {
            id: 7,
            name: 'Artur',
            message: state.newMessageText,
          };
          
          state.messages.push(newMessage);
          state.newMessageText='';
          return state;
        
        case UPDATE_MESSAGES:
            state.newMessageText = action.newMessage;
            return state;

        default:
            return state;
        } 
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (message) => ({ type: UPDATE_MESSAGES, newMessage: message })

export default messageReducer;
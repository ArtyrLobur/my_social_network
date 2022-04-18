import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGES = 'UPDATE-MESSAGES';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likeCout: "15 Likes" },
        { id: 2, message: "It's my first post", likeCout: "7 Likes" },
        { id: 3, message: "It's my second post", likeCout: "9 Likes" },
        { id: 4, message: "It's my post", likeCout: "2 Likes" },
      ],
      newPostText: 'insert text',
    },
  
    messagePage: {
      messages: [
        { id: 1, name: "Dima", message: "Hi" },
        { id: 2, name: "Andrey", message: "How are you?" },
        { id: 3, name: "Sveta", message: "Yo" },
        { id: 4, name: "Sasha", message: "My english is beautiful" },
        { id: 5, name: "Viktor", message: "Privet Ded" },
        { id: 6, name: "Artyr", message: "Nice car" },
      ],
      newMessageText: 'write message',
    },
    sidebar: {},
  },
  _callSubscriber () {
    console.log('State was Change');
  },
  // --------------------------
  getState() {
    return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer; //observer
  },
// ----------------------------
  dispatch(action) {  

    this._state.profilePage = profileReducer (this._state.profilePage, action);
    this._state.messagePage = messageReducer (this._state.messagePage, action);
    this._state.sidebar = sidebarReducer (this._state.sidebar, action);

    if (action.type === ADD_POST) { 
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCout: 0,
      };
      
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText='';
      this._callSubscriber(this._state);
    } 
    
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } 
    
    else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 7,
        name: 'Artur',
        message: this._state.messagePage.newMessageText,
      };
      
      this._state.messagePage.messages.push(newMessage);
      this._state.messagePage.newMessageText='';
      this._callSubscriber(this._state);
    }

    else if (action.type === UPDATE_MESSAGES) {
      this._state.messagePage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    } 
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (message) => ({ type: UPDATE_MESSAGES, newMessage: message })

export default store;
window.store = store;
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


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

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;
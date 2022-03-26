let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likeCout: "15 Likes" },
        { id: 2, message: "It's my first post", likeCout: "7 Likes" },
        { id: 3, message: "It's my second post", likeCout: "9 Likes" },
        { id: 4, message: "It's my post", likeCout: "2 Likes" },
      ],
      newPostText: 'react lessons',
    },
  
    messagePage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "My english is beautiful" },
        { id: 5, message: "Privet Ded" },
        { id: 6, message: "Nice car" },
      ],
  
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Artyr" },
      ],
      sidebar: {},
    },
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
    if (action.type === 'ADD-POST') { 
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCout: 0,
      };
    
      
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText='';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;
window.store = store;
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likeCout: "15 Likes" },
        { id: 2, message: "It's my first post", likeCout: "7 Likes" },
        { id: 3, message: "It's my second post", likeCout: "9 Likes" },
        { id: 4, message: "It's my post", likeCout: "2 Likes" },
      ],
      newPostText: 'insert text',
}

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) { 
        case ADD_POST:
            let newPost = {
            id: 5,
            message: state.newPostText,
            likeCout: 0,
            };
        
            state.posts.push(newPost);
            state.newPostText='';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    } 
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;

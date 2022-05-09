import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likeCout: "15 Likes" },
        { id: 2, message: "It's my first post", likeCout: "7 Likes" },
        { id: 3, message: "It's my second post", likeCout: "9 Likes" },
        { id: 4, message: "It's my post", likeCout: "2 Likes" },
      ],
      newPostText: ''
}

const profileReducerSlice = createSlice({
    name: 'posts',
    initialState,

    reducers: {
        addPosts: state => {
            let newPost = {
            id: 5,
            message: state.newPostText,
            likeCout: 0,
            };
            state.posts.push(newPost);
            state.newPostText='';
        },
        updateNewPostText: (state, action) => {
            state.newPostText = action.payload;
        }
    }
})

export const { addPosts, updateNewPostText } = profileReducerSlice.actions;
export default profileReducerSlice.reducer;

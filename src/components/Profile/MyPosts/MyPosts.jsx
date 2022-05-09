import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, updateNewPostText } from "../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

  const postSelector = useSelector((state) => state.profilePage.posts)
  const textSelector = useSelector ((state) => state.profilePage.newPostText)
  const dispatch = useDispatch()
  
  let postItems = 
    postSelector.map( p =>  <Post message ={p.message} likeCout = {p.likeCout} key={p.id}/> )

  let onPostChange = (event) => {
    let text = event.target.value;
    let action = updateNewPostText(text);
    dispatch(action);
  }

  let addPost = () => {
    dispatch(addPosts());
  }

    return  <div className={s.postsBlock}>
                   <h3> My posts </h3>
                    <div>
                      <div>
                        <textarea 
                              onChange = {onPostChange} 
                              value={textSelector}
                              placeholder = 'insert text'
                              >
                          </textarea>
                      </div>
                      <div>
                        <button
                          onClick={addPost}>
                          Add post
                        </button>
                      </div>
                    </div> 
  
                <div className={s.posts}>
                  {postItems}
                </div>
              </div>
}

export default MyPosts;
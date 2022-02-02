import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return  <div>
          <div> 
          My posts
            <div>
              <textarea></textarea>
              <button>Add post</button>
              </div> 
          </div>
        <div className={s.posts}>
          <Post message ='Hi, how are you?' likeCout = "15 Likes"/>
          <Post message ="It's my first post" likeCout = "7 Likes"/>
        
        </div>
      </div>
}

export default MyPosts;
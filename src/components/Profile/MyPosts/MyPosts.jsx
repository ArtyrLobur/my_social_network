import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return  <div className={s.postsBlock}>
                   <h3> My posts </h3>
                    <div>
                      <div>
                        <textarea></textarea>
                      </div>
                      <div>
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
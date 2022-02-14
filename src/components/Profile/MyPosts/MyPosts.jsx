import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
  let postItems = 
    props.posts.map( p =>  <Post message ={p.message} likeCout = {p.likeCout}/> )

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
                  {postItems}
                </div>
              </div>
}

export default MyPosts;
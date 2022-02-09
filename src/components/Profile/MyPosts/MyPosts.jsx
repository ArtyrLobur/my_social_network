import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";



let posts = [
  { id: 1, message: 'Hi, how are you?', likeCout: "15 Likes"},
  { id: 2, message: "It's my first post", likeCout: "7 Likes"},
]

let postItems = 
    posts.map( p =>  <Post message ={p.message} likeCout = {p.likeCout}/> )

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
                  {postItems}
                </div>
              </div>
}

export default MyPosts;
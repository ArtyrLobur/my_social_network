import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, getUsers, unFollow } from "../../redux/user-reducer";
import s from './Users.module.css';

const Users = () => {
    const dispatch = useDispatch()
    // dispatch(getUsers())
    const usersData = useSelector((state) => state.usersPage.users)
    // console.log(usersData)
    

    let following = (userId) => {
        dispatch(follow(userId))
    }

    let unFollowiing = (userId) => {
        dispatch(unFollow(userId))
    }

    return <div>
        {
            usersData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl} alt="userPhoto" />
                    </div>
                    <div>
                        {u.followed}
                        {u.followed
                            ? <button onClick={() => unFollowiing(u.id)}>Unfollow</button>
                            : <button onClick={() => following(u.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.followed}</div>
                    </span>
                    <span>
                        <div>{u.location.country }</div>
                        <div>{u.location.city }</div>
                    </span>
                </span>
            </div>
            )
        }
        
    </div>
    
        
}

export default Users;
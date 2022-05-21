import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, unFollow } from "../../redux/user-reducer";
import s from './Users.module.css';

const Users = () => {
    const userSelector = useSelector((state) => state.usersPage.users)
    const dispatch = useDispatch()



    let following = (userId) => {
        console.log(userId)
        dispatch(follow(userId))
    }

    let unFollowiing = (userId) => {
        console.log(userId)
        dispatch(unFollow(userId))
    }

    return <div>
        {
            userSelector.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl} alt="userPhoto" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => following(u.id)}>Follow</button>
                            : <button onClick={() => unFollowiing(u.id)}>Unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country }</div>
                        <div>{u.location.city }</div>
                    </span>
                </span>
            </div>)

        }
        
        </div>
    
        
}

export default Users;
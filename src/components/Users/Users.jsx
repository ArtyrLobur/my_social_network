import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow } from "../../redux/user-reducer";
import s from './Users.module.css';

const Users = () => {
    const userSelector = useSelector((state) => state.usersPage.users)
    const dispatch = useDispatch()
    console.log(userSelector)

    let onFollow = () => {
        dispatch(follow())
    }

    return <div>
        {
            userSelector.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl} alt="userPhoto" />
                    </div>
                    <div>
                        <button
                        onClick={onFollow}>
                            Follow
                        </button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
            </div>)

        }
        
        </div>
    
        
}

export default Users;
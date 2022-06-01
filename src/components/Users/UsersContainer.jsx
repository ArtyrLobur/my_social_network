import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, getUsers, unFollow } from "../../redux/user-reducer";
import Users from "./Users.jsx";

const UsersContainer = () => {
    return <div>
        <Users/>
    </div>
}

export default UsersContainer;
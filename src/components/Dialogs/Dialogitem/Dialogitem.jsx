import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
    let dialogAvatar = <img className={s.dialogItemAvatar} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt='dialogAvatar'></img>;
    
    return ( 
        <div className={s.dialog + ' ' + s.active}>
                    <NavLink to = {path}> {dialogAvatar} {props.name}</NavLink>
                </div>
    )
}

export default DialogItem;